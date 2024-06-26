import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function TributePage() {
    const tributeItems = useSelector((store) => store.TributeReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_TRIBUTE' });
    }, [dispatch]);

    const handleDelete = (itemId) => {
        dispatch({ type: 'DELETE_ITEM', payload: itemId });
    };

    return (
        <div>
            <p>Hello</p>
            <div className="container">
                <div>
                    {tributeItems.map((item) => (
                        <div key={item.id}>
                            <p>{item.first_name} {item.middle_name} {item.last_name}</p>
                            <p>{item.obituary}</p>
                            {item.image && <img src={item.image} alt={`${item.first_name} ${item.last_name}`} style={{ width: '100%', maxWidth: '500px' }} />}
                            {item.video && 
                                <video controls style={{ width: '100%', maxWidth: '500px' }}>
                                    <source src={item.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            }
                            <p>{item.date_of_birth}</p>
                            <p>{item.date_of_death}</p>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TributePage;
