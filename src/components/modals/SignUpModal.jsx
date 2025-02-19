// SignUpModal.jsx
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react'

const SignUpModal = ({ showDialog, setShowDialog, onSignInClick }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
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
        // Handle sign up logic here
        console.log('Sign up attempted with:', formData);
    };

    return (
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogTrigger asChild>
                <button 
                    className="text-base bg-[#333] text-white px-4 py-2 rounded-md hover:bg-[#444] no-underline transition-colors hover:cursor-pointer"
                    onClick={() => setShowDialog(true)}
                >
                    Sign Up
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center text-black">Create Account</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-4">
                        <div className="relative">
                            <Label htmlFor="name" className="text-black mb-2 block">
                                Full Name
                            </Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                                <Input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="pl-10 border-gray-300"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                        </div>
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
                                    placeholder="Create a password"
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
                        Create Account
                    </Button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account?{" "}
                    <button 
                        onClick={() => {
                            setShowDialog(false);
                            onSignInClick();
                        }}
                        className="text-black hover:underline bg-transparent border-none p-0 cursor-pointer"
                    >
                        Sign in
                    </button>
                </p>
            </DialogContent>
        </Dialog>
    )
}

export default SignUpModal