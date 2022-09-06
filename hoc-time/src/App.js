import React, { useState } from 'react';
import shortid from "shortid";
import moment from 'moment';

/**
 * HOC добавляет логирование props
 */
function withLogger(Component) {
  return class extends React.Component {
    render() {
      console.log(this.props.date)
      return <Component{...this.props} />;
    }
  }
};


/**
 * HOC преобразовывает дату
 */
function DateTimePretty(Component) {
  return class extends React.Component {
    render() {
      let datePretty = moment(this.props.date, "YYYY-MM-DD HH:mm:ss").fromNow()

      return <Component {...this.props} date={datePretty} />;
    }
  }
};


const DateTimeWithPretty = DateTimePretty(withLogger(DateTime));


function DateTime(props) {
  return (
    <p className="date">{props.date}</p>
  )
}

function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimeWithPretty date={props.date} />
    </div>
  )
}

function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} key={shortid.generate()} />);
}

export default function App() {
  // const [list, setList] = useState([
  //   {
  //     url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
  //     date: '2017-07-31 13:24:00'
  //   },
  //   {
  //     url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
  //     date: '2018-03-03 12:10:00'
  //   },
  //   {
  //     url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
  //     date: '2018-02-03 23:16:00'
  //   },
  //   {
  //     url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
  //     date: '2018-01-03 12:10:00'
  //   },
  //   {
  //     url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
  //     date: '2018-01-01 16:17:00'
  //   },
  //   {
  //     url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
  //     date: '2017-12-02 05:24:00'
  //   },
  // ]);


  //даты в массиве отредактированы, приведены к более актуальным на сегодняшний день

  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-09-06 13:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-03-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-09-06 23:16:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-08-25 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-09-05 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-12-02 05:24:00'
    },
  ]);

  return (
    <VideoList list={list} />
  );
}