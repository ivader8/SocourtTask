import {get} from '../data/crud';


class BookInfoService {
    constructor(){
        this.baseUrl = "http://localhost:5000/api";
        this.bookInfoUrl = `${this.baseUrl}/book/:id`;
    }


    getBookInfo(id){
       return  get(this.bookInfoUrl);
    }
}

export default BookInfoService;

