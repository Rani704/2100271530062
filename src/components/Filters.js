import React from 'react';
function Filters({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="filters">
      <input name="category" value={filters.category} onChange={handleChange} placeholder="Category" />
      <input name="company" value={filters.company} onChange={handleChange} placeholder="Company" />
      <input name="rating" type="number" value={filters.rating} onChange={handleChange} placeholder="Rating" />
      <input name="priceRange" type="range" value={filters.priceRange} onChange={handleChange} placeholder="Price Range" />
      <input name="discount" type="number" value={filters.discount} onChange={handleChange} placeholder="Discount" />
      <label>
        <input name="availability" type="checkbox" checked={filters.availability} onChange={(e) => setFilters({ ...filters, availability: e.target.checked })} />
        Available
      </label>
    </div>
  );
}

export default Filters;
