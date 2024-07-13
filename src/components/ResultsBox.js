import React from 'react';
import { Table } from 'antd';

function ResultsBox({ results }) {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => <a href={record.link} target="_blank" rel="noopener noreferrer">{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Item ID',
      dataIndex: 'item_id',
      key: 'item_id',
    },
    {
      title: 'Total Price',
      dataIndex: 'total_price',
      key: 'total_price',
      render: (text) => <span style={{ border: '2px solid red', color: 'black', fontWeight: 'bold' }}></span>,
    },
    {
      title: 'Deal Alert',
      dataIndex: 'deal_alert',
      key: 'deal_alert',
      render: (text) => text ? <span style={{ color: 'green', fontWeight: 'bold' }}>DEAL ALERT!</span> : null,
    },
  ];

  return <Table dataSource={results} columns={columns} rowKey="item_id" />;
}

export default ResultsBox;
