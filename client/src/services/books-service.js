import {get} from '../data/crud';


class BooksService {
    constructor(){
        this.baseUrl = "http://localhost:5000/api";
        this.allBooksUrl = `${this.baseUrl}/books`;          
    }


    getAllBooks(){
       return  get(this.allBooksUrl);
    }
}

export default BooksService;

