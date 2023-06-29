import { Book } from "./Book";

export function BookList(){
    return (
    <>
        <h2>BookList</h2>
        <ul>
            <li>Untamed</li>
            <li>A Promised Land</li>
            <li>American Dirt</li>
        </ul>
        <Book></Book>
    </>
    )
}