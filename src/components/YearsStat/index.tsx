import React from 'react';
import YearStat from '@/components/YearStat';
import useActivities from '@/hooks/useActivities';
import {INFO_MESSAGE} from '@/utils/const';

const YearsStat = ({year, onClick}: { year: string, onClick: (_year: string) => void }) => {
  const {years} = useActivities();
  // make sure the year click on front
  let yearsArrayUpdate = years.slice();
  yearsArrayUpdate.push('Total');
  yearsArrayUpdate = yearsArrayUpdate.filter((x) => x !== year);
  yearsArrayUpdate.unshift(year);

  // for short solution need to refactor
  return (
    <div className="fl w-100-l pb5 pr5-l">
      <section className="pb4" style={{paddingBottom: '0rem'}}>
        <p style={{lineHeight: 1.8}}>
          {INFO_MESSAGE(years.length, year)}
          <br/>
          " 如果你不能飞，那就奔跑；如果不能奔跑，那就行走；如果不能行走，那就爬行；但无论你做什么，都要保持前行的方向。"<br/>
            <p style={{fontWeight: 'bold',textAlign: 'right'}}>——马丁·路德·金</p>
        </p>
      </section>
      <hr color="red"/>
      {yearsArrayUpdate.map((year) => (
        <YearStat key={year} year={year} onClick={onClick}/>
      ))}
      {// eslint-disable-next-line no-prototype-builtins
        yearsArrayUpdate.hasOwnProperty('Total') ? (
          <YearStat key="Total" year="Total" onClick={onClick}/>
        ) : (
          <div/>
        )}
    </div>
);
};

export default YearsStat;
