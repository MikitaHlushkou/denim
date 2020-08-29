import React from 'react';

let Filter = ({styles}) => {
    return (
        <div className={styles.filter}><form action="formdata" method="post" id="data"></form>
            <p><select name="list1" form="data">
                <option>Выберите из списка</option>
                <option>Option</option>
                <option>Textarea</option>
                <option>Label</option>
                <option>Fieldset</option>
                <option>Legend</option>
            </select></p>
        </div>

    )
}

export default Filter;