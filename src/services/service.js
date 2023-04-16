export default class GotService {
    constructor() {
        this._apiBase='https://anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);


        if (!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json()
    }

    getAllCharacters = async (page) => {
        const res = await this.getResource(`/characters?page=${page}&pageSize=10`);
        return res
    }

    getCharacter = async (id) => {
        const char = await this.getResource(`/characters/${id}`)
        return this._transformCharacter(char)
    }

    getAllBooks = async (page) => {
        return this.getResource(`/books?page=${page}&pageSize=10`)
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book)
    }

    getAllHouses = async (page) => {
        return this.getResource(`/houses?page=${page}&pageSize=10`)
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house)
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

