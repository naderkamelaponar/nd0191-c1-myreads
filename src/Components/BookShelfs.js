/** بسم الله الرحمن الرحيم */ 
const BookShelfs= (props)=>{
  const {shelfTitle}= props
return (
<div>
<div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
        </ol>
        </div>
      </div>
</div>

)
    
}
export default BookShelfs