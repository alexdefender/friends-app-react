import React, {Component} from "react";
import "./style.scss";

class FilterList extends Component {

    render() {
        const statusFilter = ["All", "Alive", "Dead", "unknown"];
        const genderFilter = ["All", "Male", "Female", "unknown"];

        const statusFilterRender = statusFilter.map((status, i) =>
            <label key={i}>
                <input type="radio" value={status} name="status" onChange={this.props.sortFilter}/>
                <span>{status}</span>
            </label>
        )
        const genderFilterRender = genderFilter.map((gender, i) =>
            <label key={i}>
                <input type="radio" value={gender} name="gender" onChange={this.props.sortFilter}/>
                <span>{gender}</span>
            </label>
        )

        return (
            <section className="filters">
                <section className="search">
                    <input type="form" onChange={this.props.searchFromInput} />
                </section>
                <section className="sort-wrapper">
                    <button className="sort-btn" onClick={this.props.sortDescAsc}>Asc</button>
                    <button className="sort-btn" onClick={this.props.sortDescAsc}>Desc</button>
                </section>
                <section className="filter-status">
                    <div>Status:</div>
                    {statusFilterRender}
                </section>

                <section className="filter-gender">
                    <div>Gender:</div>
                    {genderFilterRender}
                </section>
            </section>
        )
    }
}

export default FilterList;
