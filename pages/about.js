import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/Layouts/Footer';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="About" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="About" 
                    bgImgClass="item-bg4" 
                />  

                <div className="projects-details-area ptb-110">
                    <div className="container">
                        <div className="projects-details">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="projects-details-image">
                                        <img src="/images/about/projects-img1.jpg" alt="image" />
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="projects-details-image">
                                        <img src="/images/about/projects-img2.jpg" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="projects-details-info">
                                        <div className="text-center">
                                            <h4 className='mb-0'>小栗 さえ<small>（Okuri Sae）</small></h4>
                                            <p>ばーちゃるおばけ</p>
                                        </div>
                                        <div className="mt-4 h-auto">
                                            <div className="d-table">
                                                <div className="d-table-cell">
                                                    <ul>
                                                        <li><span>活動内容:</span> ツール開発、歌ってみた、企画運営</li>
                                                        <li><span>活動開始日:</span> 2019年1月1日</li>
                                                        <li><span>誕生日:</span> 10月31日 （2歳）</li>
                                                        <li><span>性別:</span> なし（霊体）</li>
                                                        <li><span>身長/体重:</span> 142cm/42kg</li>
                                                        <li><span>所属:</span> 無所属 / 個人</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="projects-details-desc">

                                 <blockquote className="wp-block-quote mt-5">
                                    <p>わりと何でもできるハイブリッドなばーちゃるおばけ</p>
                                </blockquote>

                                <h3 className="mt-5">What is OkuriSae like?</h3>

                                <p>
                                    気ままにネット上を漂っているおばけたちの集合体だよ。<br></br>
                                    おばけらしくハロウィンが誕生日（結成日）で、みんなでワイワイお祭りごとが大好き！<br></br>
                                    人間の霊も動物の霊も混ざっていていろんな知識やスキルを持ってるよ、見た目だって思いのまま。<br></br>
                                    おばけとしてネット上を震撼させるべく、いろんな大きい企画やサービス、マルチジェンダーな歌ってみたとかで活動中！
                                </p>

                                <div className='text-center my-3'>
                                    <img src="/images/logo.png" width="500px" alt="image" />
                                </div>

                                <h3>Web系開発が得意なフルスタックなVtuber</h3>

                                <p>
                                    Vtuberや配信者向けのWebツール開発をメインに活動しています！<br></br>
                                    主に自分のVtuber活動を通して不便に思ったことをがしがしシステム化やツール化してくおばけです。<br></br>
                                    プロフィールサイトや音源検索サイト、歌詞字幕生成ツール、ゲーム配信補助ツールなど、多岐に渡ったWebサービス・ツールを開発・運営しているよ。<br></br>
                                </p>
                                
                                <div className="mb-4">
                                    <Link href="/products" activeClassName="active">
                                        <a className="learn-more-btn"><i className="fas fa-tools"></i> 便利なWebツールを見にいく</a>
                                    </Link>
                                </div>

                                <p>2021年11月からは <a href="https://www.nnn.ed.nico/" target="_blank">ドワンゴの運営するN予備校</a> の公式アンバサダーとして、N予備校やプログラミング教育の普及のお手伝いをしています！<br></br>
                                    他にも <a href="https://twitter.com/OkuriSae/status/1451307827759222787?s=20" target="_blank">プログラミング系Vtuberの集まるDiscordサーバー</a> を作ったり、<a href="https://qiita.com/advent-calendar/2021/vtuber" target="_blank">Vtuberのアドベントカレンダー</a> をつくったりと、エンジニアリング系Vtuberとして誠意活動中。
                                </p>
                                
                                <div className="row mt-3">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="projects-details-image text-center">
                                            <a href="https://twitter.com/OkuriSae/status/1454720076276375554?s=20" target="_blank">
                                                <img src="/images/about/nprep.jpg" alt="image" />
                                            </a>
                                            <p>N予備校 公式アンバサダーに就任</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="projects-details-image text-center">
                                            <a href="https://twitter.com/OkuriSae/status/1451307827759222787?s=20" target="_blank">
                                                <img src="/images/about/eng_discord.jpg" alt="image" />
                                            </a>
                                            <p>開発者交流Discord</p>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="mt-5">ボイチェンで音楽のパラダイムシフトを起こしたい！</h3>
                                <p>
                                    歌を歌うことが大好きで、ボイスチェンジャーを使ったジェンダーフリーなボーカルソングを不定期で投稿しています。<br></br>
                                    目指すは<b>『歌唱のテクニックとしてボイスチェンジャーが受け入れられる』</b>世界！ 初音ミクが起こしたようなパラダイムシフトが起きてほしいです。<br></br>
                                    歌枠はまだまだだけど、Mixした楽曲ならボイスチェンジャー特有の違和感を大分消せてきてると思うので、ぜひ聴いてみてほしいです！
                                </p>

                                <div className="mb-4">
                                    <Link href="/songs" activeClassName="active">
                                        <a  className="learn-more-btn"><i className="fas fa-headphones-alt"></i> 歌ってみたを聞く</a>
                                    </Link>
                                </div>

                                <p>
                                    また歌ってみたのMixや防音に関する知識・スキルもあり、Mixのお手伝いをさせて頂いたり、<a href="https://saeokuri.hatenablog.com/" target="_blank">音響系ブログ</a> で記事を執筆しています。<br></br>
                                    ちなみにカワイ製のガチな防音室を買ってるので夜でもばっちり歌えます、防音室は全配信者におススメしたい……。
                                </p>

                                <div className="row mt-3">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="projects-details-image text-center">
                                            <a href="https://youtu.be/8Jht-DqTNn4" target="_blank">
                                                <img src="/images/about/utawaku_thumbnail_20211124.jpg" alt="image" />
                                            </a>
                                            <p>デザインサムネイル</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="projects-details-image text-center">
                                            <img src="/images/about/voice_changer_ss.jpg" alt="image" />
                                            <p>DTM/MIX</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <h3 className="mt-5">大きめの企画運営も多数経験あり</h3>
                                <p>
                                    大きめの企画制作進行を何件も行ってきていて、実現力や見積もりの精度、調整力などに自信があるよ！<br></br>
                                    「150名のテスターを抱えたWebサービス」「64人でのVtuberゲームコラボ配信」「37名が参加するVtuber合同誌の制作」など、数十名規模の企画を複数手掛けています。<br></br>
                                    企画立案、計画見積、制作進行、当日運用、広告宣伝、トラブル対応などなど、様々な面で相談に乗れたりお役に立てる気がします？
                                </p>

                                <div className="row mt-3">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="projects-details-image text-center">
                                            <a href="https://twitter.com/kurumi_mokoko/status/1409089120719314944?s=20" target="_blank">
                                                <img src="/images/about/bomb64.jpg" alt="image" />
                                            </a>
                                            <p>スパボンRオンライン64人コラボ</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="projects-details-image text-center">
                                            <a href="https://obakeshop.github.io/c99-minabook/index.html" target="_blank">
                                                <img src="/images/about/minabook.jpg" alt="image" />
                                            </a>
                                            <p>Vtuber合同誌 MinaBook.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="projects-details-image text-center">
                                            <a href="https://twitter.com/OkuriSae/status/1372514523467288581?s=20" target="_blank">
                                                <img src="/images/about/babi20chorus.jpg" alt="image" />
                                            </a>
                                            <p>ボイチェン+両声類20人の『愛言葉Ⅲ』合唱企画</p>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="mt-5">目指すはスーパーマルチクリエイター</h3>
                                <p>
                                    そのほか、レイアウトデザインやロゴデザイン、イラストレーション、作曲などいろいろ手を出しては器用貧乏を磨いてます。<br></br>
                                    時間が足りなすぎるけど、ゆくゆくは動画制作や3Dモデリングなどもそこそこできるよう勉強したい。<br></br>
                                    目指せフルスタック（何でもできる）クリエイター！
                                </p>

                                <div className="row mt-3">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="projects-details-image text-center">
                                            <a href="https://twitter.com/OkuriSae/status/1171989724254236673?s=20" target="_blank">
                                                <img src="/images/about/logos.jpg" alt="image" />
                                            </a>
                                            <p>ロゴ配布企画で制作したロゴデザイン</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="projects-details-image text-center">
                                            <a href="https://soundcloud.com/sae-okuri" target="_blank">
                                                <img src="/images/about/saesmusic.jpg" alt="image" />
                                            </a>
                                            <p>自作BGM集</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
                <Subscribe />
                <Footer />
            </React.Fragment>
        );
    }
}

export default About;