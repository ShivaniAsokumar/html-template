import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className="top-menu">
			<div className="container">
				<div className="row">
					<div className="col-sm-7 col-md-9">
						<div id="colorlib-logo">
							<Link to="/">Footwear</Link>
						</div>
					</div>
					<div className="col-sm-5 col-md-3">
						<form action="#" className="search-wrap">
							<div className="form-group">
								<input type="search" className="form-control search" placeholder="Search" />
								<button className="btn btn-primary submit-search text-center" type="submit">
									<i className="icon-search" />
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
