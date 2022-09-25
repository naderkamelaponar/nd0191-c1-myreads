/** بسم الله الرحمن الرحيم */
const ShelfChanger = (props) => {
    const { book } = props;
    const shelf = book.shelf ? book.shelf : "none";
    let options = [
        { value: "currentlyReading", label: "Currently Reading" },
        { value: "wantToRead", label: "Want to Read" },
        { value: "read", label: "Read" },
        { value: "none", label: "None" },
    ];
    return (
        <div className="book-shelf-changer">
            <select
                onChange={(e) => {
                    const label = options.filter((o) => {
                        return o.value === e.target.value;
                    })[0]["label"];
                    props.handleUpdateShelf(book, e.target.value, label);
                }}
                defaultValue="moveTo"
            >
                <option value="moveTo" disabled>
                    Move to...
                </option>
                {options.map((o) => {
                    return o.value !== shelf ? (
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
