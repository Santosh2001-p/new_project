import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // Import relevant icons
import useAxiosPublic from "../../../hooks/useAxiosPublic"; // Assuming public API endpoint
// Import useAxiosSecure if authentication is required

const newProfile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { data, error, isLoading, sendRequest } = useAxiosPublic(); // Destructure hook

    const onSubmit = async (formData) => {
        try {
            const response = await sendRequest({
                method: "POST", // Assuming POST for creating profile
                url: "/api/new-profile", // Replace with your API endpoint
                data: formData,
            });

            if (response.status === 201) { // Handle successful creation (status code 201)
                Swal.fire("Success!", "Profile created successfully!", "success");
                // Optionally redirect to profile page or show confirmation message
            } else {
                console.error("Unexpected response:", response); // Handle unexpected errors
                Swal.fire("Error", "An error occurred. Please try again later.", "error");
            }
        } catch (error) {
            console.error("API call error:", error); // Log API call errors
            Swal.fire("Error", "There was a problem creating your profile.", "error");
        }
    };

    return (
        <div className="new-profile-form">
            <h2>Create New Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">
                        Name: <FaUser />
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", { required: true, maxLength: 50 })} // Add validation rules
                    />
                    {errors.name && <span className="error">{errors.name.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">
                        Email: <FaEnvelope />
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} // Email validation
                    />
                    {errors.email && <span className="error">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">
                        Password: <FaLock />
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register("password", { required: true, minLength: 8 })} // Password validation
                    />
                    {errors.password && <span className="error">{errors.password.message}</span>}
                </div>

                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Creating..." : "Create Profile"}
                </button>
            </form>

            {error && <div className="error-message">{error.message}</div>}
        </div>
    );
};

export default newProfile;
