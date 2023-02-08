
import UserRow from "../UserRow/UserRow";

function Items({ currentItems }) {
    return (
        <div className="items">

            {/* I don't know why the following line is written like this */}

            {currentItems && currentItems.map((item) => (
                <div>
                    <UserRow></UserRow>
                </div>
            ))}
        </div>
    );
}

export default Items