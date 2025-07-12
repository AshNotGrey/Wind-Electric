import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Wind, AlertCircle } from "lucide-react";
import { useAuthStore } from "../store";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      // Mock validation
      if (formData.email === "demo@windelectric.com" && formData.password === "password") {
        login({
          id: 1,
          name: "Demo User",
          email: formData.email,
          role: "customer",
        });
        navigate("/");
      } else {
        setError("Invalid email or password. Try demo@windelectric.com / password");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className='min-h-screen bg-gradient-bg pt-20 flex items-center justify-center py-12'>
      <div className='max-w-md w-full mx-auto px-4'>
        {/* Logo */}
        <div className='text-center mb-8'>
          <Link to='/' className='inline-flex items-center space-x-2'>
            <div className='p-2 bg-primary-600 rounded-lg'>
              <Wind className='h-6 w-6 text-white' />
            </div>
            <span className='text-2xl font-bold text-secondary-900 dark:text-white'>
              Wind Electric
            </span>
          </Link>
        </div>

        {/* Login Form */}
        <div className='card p-8'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-secondary-900 dark:text-white mb-2'>
              Welcome Back
            </h1>
            <p className='text-secondary-600 dark:text-secondary-300'>
              Sign in to your account to continue
            </p>
          </div>

          {/* Demo Credentials */}
          <div className='mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg'>
            <h3 className='text-sm font-medium text-primary-900 dark:text-primary-100 mb-2'>
              Demo Credentials
            </h3>
            <p className='text-xs text-primary-700 dark:text-primary-300'>
              Email: demo@windelectric.com
              <br />
              Password: password
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            {error && (
              <div className='flex items-center space-x-2 p-3 bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800 rounded-lg'>
                <AlertCircle className='h-5 w-5 text-error-500 flex-shrink-0' />
                <span className='text-sm text-error-700 dark:text-error-300'>{error}</span>
              </div>
            )}

            <div>
              <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                Email Address
              </label>
              <div className='relative'>
                <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400' />
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className='input pl-10'
                  placeholder='Enter your email'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                Password
              </label>
              <div className='relative'>
                <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400' />
                <input
                  type={showPassword ? "text" : "password"}
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className='input pl-10 pr-10'
                  placeholder='Enter your password'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                  {showPassword ? (
                    <EyeOff className='h-4 w-4 text-secondary-400' />
                  ) : (
                    <Eye className='h-4 w-4 text-secondary-400' />
                  )}
                </button>
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <label className='flex items-center'>
                <input
                  type='checkbox'
                  className='rounded border-secondary-300 text-primary-600 focus:ring-primary-500'
                />
                <span className='ml-2 text-sm text-secondary-700 dark:text-secondary-300'>
                  Remember me
                </span>
              </label>
              <Link
                to='/forgot-password'
                className='text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300'>
                Forgot password?
              </Link>
            </div>

            <button
              type='submit'
              disabled={isLoading}
              className='w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed'>
              {isLoading ? (
                <div className='flex items-center justify-center'>
                  <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className='mt-8 text-center'>
            <p className='text-secondary-600 dark:text-secondary-300'>
              Don't have an account?{" "}
              <Link
                to='/register'
                className='text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium'>
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className='mt-8 text-center'>
          <p className='text-sm text-secondary-500 dark:text-secondary-400'>
            By signing in, you agree to our{" "}
            <Link to='/terms' className='text-primary-600 dark:text-primary-400 hover:underline'>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to='/privacy' className='text-primary-600 dark:text-primary-400 hover:underline'>
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
