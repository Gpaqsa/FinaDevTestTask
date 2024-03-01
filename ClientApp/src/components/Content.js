import React from 'react';
import "./Content.css"
const Content = () => {
    return (
        <div className="content">
            <table>
                <tr>
                    <th>კოდი</th>
                    <th>დასახელება</th>
                    <th>ფასი</th>
                </tr>
                <tr>
                    <td>001</td>
                    <td>ვაშლი</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>002</td>
                    <td>მსხალი</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>003</td>
                    <td>საზამთრო</td>
                    <td>4</td>
                </tr>
            </table>
        </div>
    )
}

export default Content;