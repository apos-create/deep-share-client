import { toast } from "react-toastify"


export const warnToast = (message) => {
    toast.warn(message);
};

export const successToast = (message) => {
    toast.success(message);
};

export const errorToast = (message) => {
    toast.error(message);
};
export const infoToast = (message) => {
    toast.info(message);
};
