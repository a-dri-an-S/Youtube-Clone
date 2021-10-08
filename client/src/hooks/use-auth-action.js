import { useGoogleLogin } from "react-google-login";
import { useAuth } from "../context/auth-context";
import { authenticate } from "../utils/api-client";

export default function useAuthAction() {
    const user = useAuth();
    const { signIn } = useGoogleLogin({
        onSuccess: authenticate,
        clientId: "309584986690-f7gvvel476bv1mlfq7mmg318ef16cl0s.apps.googleusercontent.com"
    });

    function handleAuthAction(authAction, data) {
        if (user) {
            authAction(data)
        } else {
            signIn();
        }
    }

    return handleAuthAction;
}
