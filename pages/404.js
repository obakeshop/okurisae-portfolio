import React, { Component } from 'react';
import Link from 'next/link';

class Error extends Component {
    render() {
        return (
            <div className="error-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="error-content">
                                <img src="/images/404.png" alt="error" />
            
                                <h3>ページが見つかりません</h3>
                                <p>お探しのページは存在しないか、おばけによって隠された気配がします。</p>

                                <Link href="/">
                                    <a className="btn btn-primary">TOPへもどる</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error;