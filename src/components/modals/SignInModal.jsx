// SignInModal.jsx
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

const SignInModal = ({ showDialog, setShowDialog, onSignUpClick }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign in logic here
        console.log('Sign in attempted with:', formData);
    };

    return (
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogTrigger asChild>
                <button 
                    className="text-base text-[#333] hover:text-[#666] no-underline hover:cursor-pointer"
                    onClick={() => setShowDialog(true)}
                >
                    Sign In
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center text-black">Sign In</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-4">
                        <div className="relative">
                            <Label htmlFor="email" className="text-black mb-2 block">
                                Email
                            </Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="pl-10 border-gray-300"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <Label htmlFor="password" className="text-black mb-2 block">
                                Password
                            </Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="pl-10 pr-10 border-gray-300"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white mt-4">
                        Sign In
                    </Button>
                </form>
                <div className="flex items-center justify-between px-4 py-2">
                    <button 
                        type="button"
                        className="text-sm text-gray-500 hover:text-black"
                    >
                        Forgot password?
                    </button>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">
                    Don't have an account?{" "}
                    <button 
                        onClick={() => {
                            setShowDialog(false);
                            onSignUpClick();
                        }}
                        className="text-black hover:underline bg-transparent border-none p-0 cursor-pointer"
                    >
                        Sign up
                    </button>
                </p>
            </DialogContent>
        </Dialog>
    )
}

export default SignInModal