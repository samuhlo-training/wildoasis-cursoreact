import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup(){
    const {mutate: signup, isLoading} = useMutation({
        mutationFn : signupApi,
        onSuccess: (user) => {
            toast.success('Account created successfully');
        },
        onError: (err) => {
            console.log('ERROR',err);
            toast.error('An error occurred. Please try again.');
        }
    });   

    return {signup, isLoading};
}