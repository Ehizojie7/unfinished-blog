import './Create.css';

const Create = () => {
    return(
        <div className="create">
            <h2>Add A New Blog</h2>
            <form>
                <label>Blog title: </label>
                <input type="text" 
                required />

                <label>Blog Body: </label>
                <textarea required></textarea>
                <label>Body author: </label>
                <input type="text" required />
                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default Create;