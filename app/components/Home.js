// @flow
import { Button } from '@blueprintjs/core'
import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/build/entry.webpack'
import { Link } from 'react-router-dom';
import TutorialDocument from './TutorialDocument.pdf'
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
          <Document
            file={TutorialDocument}
            onLoadSuccess={() => console.log('loaded')}>
            <Page
              pageNumber={1}
              onLoadSuccess={() => console.log('pageloaded')}
              width={500} />
          </Document>
        </div>
      </div>
    );
  }
}
