"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  User, Mail, Camera, Save, LogOut, Utensils,
  Lock, ChevronDown, ChevronUp, Eye, EyeOff, Loader2, CheckCircle2, AlertCircle
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export default function ProfilePage() {
  const router = useRouter();
  

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ type: 'error' | 'success', msg: string } | null>(null);
  

  const [formData, setFormData] = useState({ name: "", email: "", image: "" });
  const [showPasswordSection, setShowPasswordSection] = useState(false);
  const [passwordData, setPasswordData] = useState({ current: "", new: "", confirm: "" });
  const [passVisibility, setPassVisibility] = useState({ current: false, new: false, confirm: false });
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const session = await authClient.getSession();
      if (!session?.data?.user) return router.push("/signin");

      const userData = session.data.user;
      setUser(userData);
      setFormData({
        name: userData.name || "",
        email: userData.email || "",
        image: userData.image || "",
      });
    } catch (err) {
      router.push("/signin");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setStatus(null);

    try {
      await authClient.updateUser({ 
        name: formData.name, 
        image: formData.image || undefined 
      });
      toast.success("Profile updated successfully!")
      
      const session = await authClient.getSession();
      if (session?.data?.user) setUser(session.data.user);
    } catch (err: any) {
       toast.error( "Failed to update profile" )     
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (passwordData.new !== passwordData.confirm) {
      return toast.error("Passwords do not match" )
    }

    setChangingPassword(true);
    try {
      await authClient.changePassword({
        currentPassword: passwordData.current,
        newPassword: passwordData.new,
      });
        toast.success( "Password updated successfully!")
      setPasswordData({ current: "", new: "", confirm: "" });
      setShowPasswordSection(false);
    } catch (err: any) {
        toast.error("Failed to change password")
    } finally {
      setChangingPassword(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 via-white to-orange-50">
      <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
    </div>
  );
  const canChangePassword = !user?.image;

  return (
    <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-100 overflow-hidden">
          <div className="h-32 bg-linear-to-r from-orange-400 to-amber-500 relative">
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="px-6 sm:px-8 pb-8 -mt-16">
            <div className="flex flex-col sm:flex-row items-end gap-6 mb-6">
              <div className="relative group">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white p-1 shadow-xl">
                  <div className="w-full h-full rounded-full bg-orange-100 overflow-hidden flex items-center justify-center border-4 border-white">
                    {formData.image ? (
                      <img src={formData.image} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-14 h-14 text-orange-400" />
                      
                    )}

                  </div>
                  
                </div>
                <label className="absolute bottom-1 right-1 bg-orange-500 text-white p-2.5 rounded-full cursor-pointer hover:bg-orange-600 active:scale-95 transition-all shadow-lg border-2 border-white">
                  <Camera size={16} />
                  <input type="file" className="hidden" accept="image/*" />
                </label>
              </div>
              <div className="flex-1 text-center sm:text-left mb-1">
                <h2 className="text-2xl font-bold text-black ">{user?.name || "Member"}</h2>
                <p className="text-gray-500">{user?.email}</p>
              
              </div>
            </div>

            {status && (
              <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 border ${
                status.type === 'success' 
                  ? 'bg-green-50 border-green-200 text-green-700' 
                  : 'bg-red-50 border-red-200 text-red-700'
              }`}>
                {status.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                <span className="font-medium">{status.msg}</span>
              </div>
            )}

            <form onSubmit={handleUpdateProfile} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 text-gray-800 focus:ring-orange-500 bg-white/70"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    value={formData.email}
                    disabled
                    className="w-full pl-10 pr-4 py-3 border border-orange-200 rounded-xl bg-gray-50 text-gray-500 cursor-not-allowed"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                >
                  {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                  Update Profile
                </button>
                <button
                  type="button"
                  onClick={() => authClient.signOut().then(() => router.push("/"))}
                  className="px-6 py-3 border border-red-200 text-red-600 rounded-xl font-semibold hover:bg-red-50 transition flex items-center justify-center gap-2"
                >
                  <LogOut size={18} /> Log Out
                </button>
              </div>
            </form>

            
            {canChangePassword && (
              <div className="mt-10 border-t border-orange-100 pt-6">
                <button
                  onClick={() => setShowPasswordSection(!showPasswordSection)}
                  className="flex items-center justify-between w-full p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition"
                >
                  <span className="flex items-center gap-3 font-medium text-gray-700">
                    <Lock size={20} className="text-orange-500" />
                    Change Password
                  </span>
                  {showPasswordSection ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {showPasswordSection && (
                  <form onSubmit={handlePasswordChange} className="mt-6 space-y-4">
                    {(['current', 'new', 'confirm'] as const).map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                          {field} Password
                        </label>
                        <div className="relative">
                          <input
                            type={passVisibility[field] ? "text" : "password"}
                            value={passwordData[field]}
                            onChange={(e) => setPasswordData({...passwordData, [field]: e.target.value})}
                            className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setPassVisibility({...passVisibility, [field]: !passVisibility[field]})}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-600"
                          >
                            {passVisibility[field] ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>
                    ))}
                    <button
                      type="submit"
                      disabled={changingPassword}
                      className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition disabled:opacity-50"
                    >
                      {changingPassword ? <Loader2 className="animate-spin mx-auto" size={20} /> : "Update Password"}
                    </button>
                  </form>
                )}
              </div>
            )}

            {!canChangePassword && (
              <div className="mt-10 border-t border-orange-100 pt-6 text-center text-gray-500">
                <Lock size={20} className="mx-auto mb-2 text-orange-400" />
                <p className="text-sm">You're signed in with a Google account. Password management is handled by your provider.</p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-orange-100 pt-6">
              <div className="flex items-center gap-2">
                <Utensils size={20} className="text-orange-500" />
                <span className="font-medium text-gray-700">Dietary Preferences</span>
              </div>
              <button className="text-sm text-orange-600 font-medium px-4 py-2 bg-orange-50 rounded-full hover:bg-orange-100 transition border border-dashed border-orange-200">
                + Add preferences
              </button>
            </div>

     
            <p className="text-xs text-center text-gray-400 mt-8">
              Member since {new Date(user?.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}