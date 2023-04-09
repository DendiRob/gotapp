export default class GotService {
    constructor() {
        this._apiBase='https://anapioficeandfire.com/api';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);


        if (!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json()
    }

    async getAllCharacters(){
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res
    }

    async getCharacter(id) {
        const char = await this.getResource(`/characters/${id}`)
        return this._transformCharacter(char)
    }

    getAllBooks(){
        return this.getResource('/books')
    }

    getBook(id){
        return this.getResource(`/books/${id}`)
    }

    getAllHouses(){
        return this.getResource('/houses?page=5&pageSize=10')
    }

    getHouse(id){
        return this.getResource(`/houses/${id}`)
    }

    _transformCharacter(char){
        return {
            name: char.name ? char.name : "oh sorry, we dont know about this",
            gender: char.gender ? char.gender : "oh sorry, we dont know about this",
            born: char.born ? char.born : "oh sorry, we dont know about this",
            died: char.died ? char.died : "oh sorry, we dont know about this",
            culture: char.culture ? char.culture : "oh sorry, we dont know about this"
        }
    }

    _transformHouse(house){
        return {
            name: house.name,
            region:house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book){
        return {
            name: book.name,
            namberOfPages: book.namberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}

