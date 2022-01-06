import React from 'react';
import Banner from '../components/Banner';
import TopFilter from '../components/TopFilter';
import ListFrame from '../components/ListFrame';

function ShopList() {
	return (
		<div>
			<Banner content="Shop List" title="Shop List" />
			<TopFilter />
			<div className="container">
				<ListFrame/>
			</div>
		</div>
	);
}

export default ShopList;
