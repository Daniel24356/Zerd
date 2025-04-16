import Header from "../home/header";
import './Blog.css'




export const BlogPage = () => {

  const Article = ({ imgSrc, imgAlt, category, categoryLink, title, articleLink, date, views }) => (
    <article className="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
      <div className="post-thumb">
        <a href={articleLink}>
          <img className="border-radius-15" src={imgSrc} alt={imgAlt} />
        </a>
      </div>
      <div className="entry-content-2">
        <p className="mb-10 font-sm h6">
          <a className="entry-meta text-muted" href={categoryLink}>
            {category}
          </a>
        </p>
        <h4 className="post-title mb-15">
          <a href={articleLink}>{title}</a>
        </h4>
        <div className="entry-meta font-xs color-grey mt-10 pb-10">
          <div>
            <span className="post-on mr-10">{date}</span>
            <span className="hit-count has-dot mr-10">{views}</span>
          </div>
        </div>
      </div>
    </article>
  );
  
  const SearchWidget = () => (
    <div className="sidebar-widget-2 widget_search mb-50">
      <div className="search-form form-group">
        <form action="https://nest.botble.com/search" method="GET">
          <input type="text" name="q" placeholder="Search..." />
          <button type="submit">
            <i className="fi-rs-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
  
  const CategoryWidget = () => (
    <div className="sidebar-widget widget-category-2 mb-30">
      <h5 className="section-title style-1 mb-30">Categories</h5>
      <ul>
        <li>
          <a href="https://nest.botble.com/product-categories/milks-and-dairies">
            <img
              src="https://nest.botble.com/storage/product-categories/icon-1.png"
              alt="Milks and Dairies"
            />
            Milks and Dairies
          </a>
          <span className="count">5</span>
        </li>
        {/* Add more categories as needed */}
      </ul>
    </div>
  );
  
      return (
       <>
           <Header></Header>
        <main className="main" id="main-section">
          <div className="page-header24 mt-30 mb-75">
            <div className="container24">
              <div className="archive-header page_speed_1850164813a">
                <div className="roweed align-items-center">
                  <div className="col-xl-3">
                    <h1 className="mb-15a">Blog</h1>
                    <div className="breadcrumb">
                      <div className="breadcrumb-item d-inline-block">
                        <a href="https://nest.botble.com" className="Home-link" title="Home">Home</a>
                      </div>
                      <span></span>
                      <div className="breadcrumb-item d-inline-block active">
                        <div itemProp="item">Blog</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-content mb-50a">
            <div className="container24">
              <div className="roweed">
                <div className="col-lg-9">
                  <div className="shop-product-filter mb-50 pr-30">
                    <div className="total-productw">
                      <h2 className="h2">
                        <img
                          className="w-36px mr-10"
                          src="https://nest.botble.com/storage/general/category-1.png"
                          alt="Blog"
                        />
                        Blog
                      </h2>
                    </div>
                  </div>
                  <div className="loop-grid pr-30">
                    <div className="roweed">
                      <Article
                        imgSrc="https://nest.botble.com/storage/news/1-800x800.png"
                        imgAlt="4 Expert Tips On How To Choose The Right Men’s Wallet"
                        category="Fashion"
                        categoryLink="https://nest.botble.com/blog/fashion"
                        title="4 Expert Tips On How To Choose The Right Men’s Wallet"
                        articleLink="https://nest.botble.com/blog/4-expert-tips-on-how-to-choose-the-right-mens-wallet"
                        date="26 Jan 2025"
                        views="1,038 Views"
                      />
                      <Article
                        imgSrc="https://nest.botble.com/storage/news/2-800x800.png"
                        imgAlt="Sexy Clutches: How to Buy & Wear a Designer Clutch Bag"
                        category="Ecommerce"
                        categoryLink="https://nest.botble.com/blog/ecommerce"
                        title="Sexy Clutches: How to Buy & Wear a Designer Clutch Bag"
                        articleLink="https://nest.botble.com/blog/sexy-clutches-how-to-buy-wear-a-designer-clutch-bag"
                        date="26 Jan 2025"
                        views="531 Views"
                      />
                      {/* Add more <Article /> components here as needed */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 primary-sidebar sticky-sidebar">
                  <div className="widget-area">
                    <SearchWidget />
                    <CategoryWidget />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
       </>
    );
};



