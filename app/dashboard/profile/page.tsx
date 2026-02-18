

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  User,
  Mail,
  Save,
  Heart,
  Calendar,
  Settings,
  LogOut,
  Utensils,
  Lock,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [hasPassword, setHasPassword] = useState(true);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = await auth.api.getSession({
          headers: await headers(),
        });

        if (session?.user.image) {
          setHasPassword(false); // professional server-side redirect
        }

        const userData = session.data.user;
        setUser(userData);
        setFormData({
          name: userData.name || "",
          email: userData.email || "",
        });

        const accounts = await authClient.listAccounts();
        const hasEmailAccount = accounts?.data?.some(
          (acc: any) => acc.provider === "email",
        );
        setHasPassword(!!hasEmailAccount);
      } catch (err) {
        console.error("Session fetch error:", err);
        router.push("/signin");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setSaving(true);

    try {
      await authClient.updateUser({
        name: formData.name,
      });
      setSuccess(true);
      const session = await authClient.getSession();
      if (session?.data?.user) setUser(session.data.user);
    } catch (err: any) {
      setError(err.message || "Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError(null);
    setPasswordSuccess(false);

    if (
      !passwordData.currentPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      setPasswordError("All fields are required");
      return;
    }
    if (passwordData.newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters");
      return;
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError("New passwords do not match");
      return;
    }

    setChangingPassword(true);
    try {
      await authClient.changePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      });
      setPasswordSuccess(true);
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setShowChangePassword(false);
    } catch (err: any) {
      setPasswordError(err.message || "Failed to change password");
    } finally {
      setChangingPassword(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
          {/* Header */}
          <div className="bg-orange-500 px-6 py-8 sm:px-10">
            <h1 className="text-3xl font-bold text-white flex items-center gap-2">
              <User size={32} /> Your Profile
            </h1>
          </div>

          <div className="p-6 sm:p-10">
            {/* Avatar section – only display image from session */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <div className="relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-orange-100 border-4 border-orange-200 overflow-hidden flex items-center justify-center">
                  {user?.image ? (
                    <img
                      src={user.image}
                      alt="Profile"
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <User size={48} className="text-orange-400" />
                  )}
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-xl font-bold text-gray-800">
                  {user?.name}
                </h2>
                <p className="text-gray-600">{user?.email}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Member since{" "}
                  {new Date(user?.createdAt || "").toLocaleDateString()}
                </p>
              </div>
            </div>

            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
                Profile updated successfully!
              </div>
            )}

            {/* Profile form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white/70"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    disabled
                    className="w-full pl-10 pr-4 py-3 border border-orange-200 rounded-xl bg-gray-50 text-gray-500 cursor-not-allowed"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Email cannot be changed
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  type="submit"
                  disabled={saving}
                  className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition flex items-center gap-2 shadow-md disabled:opacity-50"
                >
                  <Save size={18} /> {saving ? "Saving..." : "Save Changes"}
                </button>

                <button
                  type="button"
                  onClick={handleSignOut}
                  className="border border-red-300 text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition flex items-center gap-2"
                >
                  <LogOut size={18} /> Log Out
                </button>
              </div>
            </form>

            {/* Change Password Section – only if user has a password */}
            {hasPassword && (
              <div className="mt-8 border-t border-orange-100 pt-6">
                <button
                  onClick={() => setShowChangePassword(!showChangePassword)}
                  className="flex items-center gap-2 text-gray-700 hover:text-orange-600 font-medium transition"
                >
                  <Lock size={20} className="text-orange-500" />
                  Change Password
                  {showChangePassword ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {showChangePassword && (
                  <form
                    onSubmit={handlePasswordChange}
                    className="mt-4 space-y-4"
                  >
                    {passwordError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                        {passwordError}
                      </div>
                    )}
                    {passwordSuccess && (
                      <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
                        Password changed successfully!
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="currentPassword"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Current Password
                      </label>
                      <div className="relative">
                        <Lock
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={18}
                        />
                        <input
                          type={showCurrent ? "text" : "password"}
                          id="currentPassword"
                          value={passwordData.currentPassword}
                          onChange={(e) =>
                            setPasswordData({
                              ...passwordData,
                              currentPassword: e.target.value,
                            })
                          }
                          className="w-full pl-10 pr-12 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white/70"
                          disabled={changingPassword}
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrent(!showCurrent)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                          {showCurrent ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="newPassword"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        New Password
                      </label>
                      <div className="relative">
                        <Lock
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={18}
                        />
                        <input
                          type={showNew ? "text" : "password"}
                          id="newPassword"
                          value={passwordData.newPassword}
                          onChange={(e) =>
                            setPasswordData({
                              ...passwordData,
                              newPassword: e.target.value,
                            })
                          }
                          className="w-full pl-10 pr-12 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white/70"
                          disabled={changingPassword}
                        />
                        <button
                          type="button"
                          onClick={() => setShowNew(!showNew)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                          {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Must be at least 8 characters
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <Lock
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={18}
                        />
                        <input
                          type={showConfirm ? "text" : "password"}
                          id="confirmPassword"
                          value={passwordData.confirmPassword}
                          onChange={(e) =>
                            setPasswordData({
                              ...passwordData,
                              confirmPassword: e.target.value,
                            })
                          }
                          className="w-full pl-10 pr-12 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white/70"
                          disabled={changingPassword}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirm(!showConfirm)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                          {showConfirm ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={changingPassword}
                      className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition disabled:opacity-50"
                    >
                      {changingPassword ? "Updating..." : "Update Password"}
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Dietary Preferences (placeholder) */}
            <div className="mt-8 border-t border-orange-100 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Utensils size={20} className="text-orange-500" /> Dietary
                Preferences
              </h3>
              <div className="flex flex-wrap gap-2">
                <button className="text-orange-600 text-sm hover:underline px-2">
                  + Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
