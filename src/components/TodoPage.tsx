import * as React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import ReactPaginate = require('react-paginate');

import './TodoPage.css';

export interface TodoProps {
  page: number;
  maxPage: number;
  todoList: string[];
  params: object;
}
export interface TodoHandler {
  changePage(num: number): void;
  update(page: number): void;
}

export class TodoPage extends React.Component<TodoProps & TodoHandler> {
  componentDidMount() {
    this.props.update(this.props.page);
    console.log(this.props.params);
  }
  componentWillReceiveProps(next: TodoProps) {
    if (this.props.page !== next.page) {
      this.props.update(next.page);
    }
  }
  render() {
    let handler = (selectedItem: { selected: number }) => {
      this.props.changePage(selectedItem.selected);
    };
    return (
      <div className="todo-page">
        <h1>TodoPage</h1>
        <ReactPaginate
          pageCount={this.props.maxPage}
          pageRangeDisplayed={4}
          marginPagesDisplayed={2}
          forcePage={this.props.page}
          onPageChange={handler}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-link disabled"
          activeClassName="active"
          previousLabel="<"
          nextLabel=">"
        />
        <ul>{this.props.todoList.map(str => <li key={str}>{str}</li>)}</ul>
      </div>
    );
  }
}
