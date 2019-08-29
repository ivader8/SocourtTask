import {post} from '../data/crud';

class CreateService{
    constructor(){
        this.baseUrl ='http://localhost:5000/book';
        this.loginUrl=`${this.baseUrl}/create`;
    }
    create(credentials) {

        //return post('this.loginUrl', credentials)
        return post('http://localhost:5000/book/create', credentials)
    }
}

export default CreateService;