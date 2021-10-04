import axios from 'axios';

export const client = axios.create({
    baseURL: "/api/v1"
})

export function authenticate(response) {
    client({
        method: "POST",
        url: "/auth/google-login",
        data: { idToken: response.tokenId } 
    })
    .then(response => {
        console.log("Sign in success: ", response);
        window.location.assign(window.location.href)
    })
    .catch(error => {
        console.log("Sign In error: ", error);
    })
}

export async function signoutUser() {}

export async function updateUser() {}

export async function addVideoView() {}

export async function addComment() {}

export async function addVideo() {}

export async function toggleSubscribeUser() {}

export async function likeVideo() {}

export async function dislikeVideo() {}

export async function deleteVideo() {}

export async function deleteComment() {}
