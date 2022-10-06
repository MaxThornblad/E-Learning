import React, { useEffect } from 'react';
import { Card, Col, Radio, Row } from 'antd';
import { Course } from '../models/course';
import ShowCourses from '../components/ShowCourses';
import { Pagination } from 'antd';
import { useAppDispatch, useAppSelector } from '../redux/store/configureStore';
import {
  coursesSelector,
  getCoursesAsync,
  setCourseParams,
  setPageNumber,
} from '../redux/slice/courseSlice';
import { categoriesSelector } from '../redux/slice/categorySlice';
import { Category } from '../models/category';
import Select, { SingleValue } from 'react-select';

const sortOptions = [
  { value: 'title', label: 'Alphabetical' },
  { value: 'priceDescending', label: 'Price - High to low' },
  { value: 'priceAscending', label: 'Price - Low to high' },
];

const Homepage = () => {
  const data = useAppSelector(coursesSelector.selectAll);
  const dispatch = useAppDispatch();
  const { coursesLoaded, pagination, courseParams } = useAppSelector(
    (state) => state.course,
  );
  const categories = useAppSelector(categoriesSelector.selectAll);

  const getCategories = () => {
    const catArray: any[] = [];
    categories.forEach((category: Category) => {
      catArray.push({ value: category.id, label: category.name });
    });
    return catArray;
  };

  useEffect(() => {
    if (!coursesLoaded) dispatch(getCoursesAsync());
  }, [coursesLoaded, dispatch]);

  function onChange(pageNumber: number) {
    dispatch(setPageNumber({ pageIndex: pageNumber }));
    document.querySelectorAll(".ant-pagination-item-active").forEach(e => e.classList.remove("ant-pagination-item-active"))
    document.querySelectorAll(`.ant-pagination li[title="${pageNumber}"]`).forEach(e => e.classList.add("ant-pagination-item-active"))
  }

  return (
    <div className="course">
      <div className="course__header">
        <h1>What to learn Next?</h1>
        <h2>New Courses picked just for you...</h2>
      </div>

      <div className="select_options">
          <Select className='select_options_option'
            options={sortOptions}
            placeholder ="Sort by..."
            onChange={(
              newValue: SingleValue<{ value: string; label: string }>
            ) => dispatch(setCourseParams({ sort: newValue!.value }))}
          />
          <Select className='select_options_option'
            options={getCategories()}
            placeholder ="Category..."
            onChange={(
              newValue: SingleValue<{ value: string; label: string }>
            ) => dispatch(setCourseParams({ category: newValue!.value }))}
          />
        </div>
          <div className="pagination">
            {pagination && (
              <Pagination
                defaultCurrent={pagination?.pageIndex}
                total={pagination?.totalCount}
                onChange={onChange}
                pageSize={pagination?.pageSize}
              />
            )}
          </div>
        <div className='homepage_courses'>
            {data &&
              data.map((course: Course, index: number) => {
                return <ShowCourses key={index} course={course} />;
              })}
        </div>
        <div className="pagination">
            {pagination && (
              <Pagination
                defaultCurrent={pagination?.pageIndex}
                total={pagination?.totalCount}
                onChange={onChange}
                pageSize={pagination?.pageSize}
              />
            )}
          </div>
    </div>
  );
};

export default Homepage;