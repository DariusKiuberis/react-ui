import React from 'react'
import Bar from './components/Bar/Bar'
import Foo from './components/Foo/Foo'
import styles from './styles.module.css'

 const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component test: {text}</div>
}

export  { Foo, Bar, ExampleComponent }