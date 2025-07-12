import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, Wind, AlertCircle, CheckCircle } from "lucide-react";
import { useAuthStore } from "../store";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuthStore();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }
    if (!formData.agreeToTerms) {
      setError("You must agree to the terms and conditions");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      // Mock registration
      register({
        id: Date.now(),
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        role: "customer",
      });
      navigate("/");
      setIsLoading(false);
    }, 1000);
  };

  const passwordStrength = () => {
    const password = formData.password;
    if (!password) return { score: 0, label: "", color: "" };

    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const labels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
    const colors = ["error", "warning", "warning", "success", "success"];

    return {
      score: Math.min(score, 5),
      label: labels[Math.min(score - 1, 4)],
      color: colors[Math.min(score - 1, 4)],
    };
  };

  const strength = passwordStrength();

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

        {/* Register Form */}
        <div className='card p-8'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-secondary-900 dark:text-white mb-2'>
              Create Account
            </h1>
            <p className='text-secondary-600 dark:text-secondary-300'>
              Join thousands of customers using renewable energy
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            {error && (
              <div className='flex items-center space-x-2 p-3 bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800 rounded-lg'>
                <AlertCircle className='h-5 w-5 text-error-500 flex-shrink-0' />
                <span className='text-sm text-error-700 dark:text-error-300'>{error}</span>
              </div>
            )}

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                  First Name
                </label>
                <div className='relative'>
                  <User className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400' />
                  <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className='input pl-10'
                    placeholder='First name'
                  />
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                  Last Name
                </label>
                <div className='relative'>
                  <User className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400' />
                  <input
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className='input pl-10'
                    placeholder='Last name'
                  />
                </div>
              </div>
            </div>

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
                  placeholder='Create a password'
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

              {/* Password Strength */}
              {formData.password && (
                <div className='mt-2'>
                  <div className='flex items-center space-x-2 mb-1'>
                    <div className='flex-1 bg-secondary-200 dark:bg-secondary-700 rounded-full h-2'>
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          strength.color === "error"
                            ? "bg-error-500"
                            : strength.color === "warning"
                            ? "bg-warning-500"
                            : "bg-success-500"
                        }`}
                        style={{ width: `${(strength.score / 5) * 100}%` }}></div>
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        strength.color === "error"
                          ? "text-error-600 dark:text-error-400"
                          : strength.color === "warning"
                          ? "text-warning-600 dark:text-warning-400"
                          : "text-success-600 dark:text-success-400"
                      }`}>
                      {strength.label}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2'>
                Confirm Password
              </label>
              <div className='relative'>
                <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400' />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className='input pl-10 pr-10'
                  placeholder='Confirm your password'
                />
                <button
                  type='button'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                  {showConfirmPassword ? (
                    <EyeOff className='h-4 w-4 text-secondary-400' />
                  ) : (
                    <Eye className='h-4 w-4 text-secondary-400' />
                  )}
                </button>
              </div>

              {/* Password Match Indicator */}
              {formData.confirmPassword && (
                <div className='mt-2 flex items-center space-x-2'>
                  {formData.password === formData.confirmPassword ? (
                    <CheckCircle className='h-4 w-4 text-success-500' />
                  ) : (
                    <AlertCircle className='h-4 w-4 text-error-500' />
                  )}
                  <span
                    className={`text-xs ${
                      formData.password === formData.confirmPassword
                        ? "text-success-600 dark:text-success-400"
                        : "text-error-600 dark:text-error-400"
                    }`}>
                    {formData.password === formData.confirmPassword
                      ? "Passwords match"
                      : "Passwords do not match"}
                  </span>
                </div>
              )}
            </div>

            <div>
              <label className='flex items-start'>
                <input
                  type='checkbox'
                  name='agreeToTerms'
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className='mt-1 rounded border-secondary-300 text-primary-600 focus:ring-primary-500'
                />
                <span className='ml-3 text-sm text-secondary-700 dark:text-secondary-300'>
                  I agree to the{" "}
                  <Link
                    to='/terms'
                    className='text-primary-600 dark:text-primary-400 hover:underline'>
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to='/privacy'
                    className='text-primary-600 dark:text-primary-400 hover:underline'>
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <button
              type='submit'
              disabled={isLoading}
              className='w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed'>
              {isLoading ? (
                <div className='flex items-center justify-center'>
                  <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
                  Creating account...
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className='mt-8 text-center'>
            <p className='text-secondary-600 dark:text-secondary-300'>
              Already have an account?{" "}
              <Link
                to='/login'
                className='text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium'>
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className='mt-8'>
          <div className='text-center mb-6'>
            <h3 className='text-lg font-semibold text-secondary-900 dark:text-white mb-2'>
              Why create an account?
            </h3>
          </div>
          <div className='space-y-3'>
            <div className='flex items-center space-x-3'>
              <CheckCircle className='h-5 w-5 text-success-500 flex-shrink-0' />
              <span className='text-sm text-secondary-600 dark:text-secondary-300'>
                Save your favorite products and get personalized recommendations
              </span>
            </div>
            <div className='flex items-center space-x-3'>
              <CheckCircle className='h-5 w-5 text-success-500 flex-shrink-0' />
              <span className='text-sm text-secondary-600 dark:text-secondary-300'>
                Track your orders and installation progress
              </span>
            </div>
            <div className='flex items-center space-x-3'>
              <CheckCircle className='h-5 w-5 text-success-500 flex-shrink-0' />
              <span className='text-sm text-secondary-600 dark:text-secondary-300'>
                Access exclusive deals and early product launches
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
