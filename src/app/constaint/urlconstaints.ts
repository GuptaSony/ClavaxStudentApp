import { environment } from '../../environments/environment';
export const UrlConstants = Object.freeze({

    BaseUrl: environment.baseUrl,
    Student:{
        Get:{
            Student:'/student', 
            
        },
        Post:{
            student:'/student'
        }
    }
});
