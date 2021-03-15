import {UPLOADIMAGE} from '../config/urls'
import { apiDelete,apiGet,apiPost,apiPut } from "../utils/utils";
export function uploadfile (data={}){ 
    const headers = {'Content-Type': 'multipart/form-data'};

    return apiPost(UPLOADIMAGE,data,headers);
}