import React from "react";

const List = ({ people, setPeople }) => {
    const removePerson = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };

    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <article key={id} className="person">
                        <img src={image} alt="" />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                            <button onClick={() => removePerson(id)}>
                                Wishes out
                            </button>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default List;
