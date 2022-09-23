/** بسم الله الرحمن الرحيم */
import { update } from "../BooksAPI";
const ShelfChanger = ({ book ,updateBooks}) => {
    //const [selectedValue,setSelectedValue]=useState("moveTo")
    let options = [
        { value: "currentlyReading", label: "Currently Reading" },
        { value: "wantToRead", label: "Want to Read" },
        { value: "read", label: "Read" },
        { value: "none", label: "None" },
    ];

    return (
        <div className="book-shelf-changer">
            <select
                onChange={async (e) => {
                    await update(book, e.target.value);
                }}
                defaultValue="moveTo"
            >
                <option value="moveTo" disabled>
                    Move to...
                </option>
                {options.map((o) => {
                    return o.value !== book.shelf ? (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ) : null;
                })}
            </select>
        </div>
    );
};
export default ShelfChanger;
