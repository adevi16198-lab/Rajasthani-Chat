import React, { useState } from 'react';
import { Star, MessageSquare, Plus, CheckCircle, Quote } from 'lucide-react';
import { reviews as initialReviews, businessDetails } from '../data';
import { Review } from '../types';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>(initialReviews);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  // New review form fields
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerRating, setReviewerRating] = useState(5);
  const [reviewerComment, setReviewerComment] = useState('');

  // Calculate dynamic overall score summary
  const totalReviewsCount = reviewsList.length + (businessDetails.ratingCount - initialReviews.length);
  const sumOfAllScores = (reviewsList.reduce((acc, curr) => acc + curr.rating, 0) - initialReviews.reduce((acc, curr) => acc + curr.rating, 0)) + (businessDetails.rating * businessDetails.ratingCount);
  const computedRating = (sumOfAllScores / totalReviewsCount).toFixed(1);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim() || !reviewerComment.trim()) return;

    const newReview: Review = {
      id: `custom-rev-${Date.now()}`,
      name: reviewerName.trim(),
      rating: reviewerRating,
      comment: reviewerComment.trim(),
      date: 'Just now',
      avatar: reviewerName.substring(0, 2).toUpperCase()
    };

    setReviewsList([newReview, ...reviewsList]);
    setFormSubmitted(true);
    
    // Clear form
    setReviewerName('');
    setReviewerRating(5);
    setReviewerComment('');

    // Reset success banner after 4 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setShowAddForm(false);
    }, 3000);
  };

  return (
    <section id="reviews" className="py-20 bg-cream-dark/30 border-y border-saffron/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-saffron font-bold text-xs uppercase tracking-widest block mb-2">Word of Mouth</span>
          <h2 className="text-3xl sm:text-4xl font-black text-espresso leading-tight">
            What Siliguri Foodies Say About Us
          </h2>
          <div className="w-16 h-1 bg-saffron rounded-full mx-auto mt-4" />
        </div>

        {/* Rating Overview Scoreboard card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12" id="reviews-scoreboard-layout">
          
          {/* Big Score Card */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-saffron/10 flex flex-col justify-center items-center text-center shadow-sm">
            <span className="text-xs uppercase tracking-widest font-bold text-espresso-light mb-1">Overall Rating</span>
            <span className="text-6xl font-black text-saffron tracking-tight leading-none mb-3">
              {computedRating}
            </span>
            
            {/* Stars */}
            <div className="flex gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  size={20}
                  className={`${idx < Math.round(parseFloat(computedRating)) ? 'text-gold fill-gold' : 'text-espresso/10'}`}
                />
              ))}
            </div>
            
            <p className="text-xs text-espresso-light font-medium">
              Based on <span className="text-saffron font-bold">{totalReviewsCount}</span> verified reviews
            </p>
            
            <div className="w-full border-t border-espresso/10 my-4" />
            
            <div className="space-y-1.5 w-full text-xs">
              <div className="flex justify-between items-center text-espresso-light">
                <span>Authentic Spices</span>
                <span className="font-bold text-espresso">5.0/5</span>
              </div>
              <div className="flex justify-between items-center text-espresso-light">
                <span>Value for Money</span>
                <span className="font-bold text-espresso">4.9/5</span>
              </div>
              <div className="flex justify-between items-center text-espresso-light">
                <span>Hygiene & Cleanliness</span>
                <span className="font-bold text-espresso">4.8/5</span>
              </div>
            </div>
          </div>

          {/* Testimonial slider / list area */}
          <div className="lg:col-span-8 flex flex-col justify-between" id="reviews-list-area">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reviewsList.slice(0, showAllReviews ? reviewsList.length : 4).map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white p-6 rounded-3xl border border-saffron/5 shadow-sm hover:shadow-md transition-all flex flex-col relative"
                >
                  {/* Quote icon accent */}
                  <Quote className="absolute right-6 bottom-6 text-saffron/5 h-16 w-16 pointer-events-none" />

                  {/* Top: Avatar & Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-saffron-light text-saffron border border-saffron/15 font-bold flex items-center justify-center text-sm shadow-inner">
                      {rev.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-espresso text-sm leading-tight">{rev.name}</h4>
                      <span className="text-[10px] text-espresso-light font-light">{rev.date}</span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-2.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={`${i < rev.rating ? 'text-gold fill-gold' : 'text-espresso/10'}`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs text-espresso/80 leading-relaxed font-light italic flex-1">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>

            {/* Actions for reviews */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-3 mt-8">
              {reviewsList.length > 4 && (
                <button
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  className="bg-cream-dark/60 hover:bg-cream-dark text-espresso px-5 py-3 rounded-2xl font-semibold text-xs border border-saffron/10 shadow-sm transition-all"
                >
                  {showAllReviews ? 'Show Less' : `View All Reviews (${reviewsList.length})`}
                </button>
              )}
              {!showAddForm ? (
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-espresso hover:bg-espresso-light text-white px-5 py-3 rounded-2xl font-semibold text-xs flex items-center gap-1.5 shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <Plus size={14} />
                  <span>Write Your Own Review</span>
                </button>
              ) : (
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-espresso hover:text-saffron font-semibold text-xs underline"
                >
                  Cancel Writing Review
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Dynamic Add Review Form */}
        {showAddForm && (
          <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border-2 border-dashed border-saffron/30 animate-scale-up" id="write-review-card">
            {formSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle className="text-emerald-500 mx-auto" size={48} />
                <h3 className="font-bold text-espresso text-lg">Thank You So Much!</h3>
                <p className="text-xs text-espresso-light">
                  Your review has been successfully posted. We appreciate your valuable feedback!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <h3 className="font-bold text-espresso text-base mb-2 flex items-center gap-2">
                  <MessageSquare size={18} className="text-saffron" />
                  Share Your Culinary Experience
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold text-espresso-light mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyadarshini Mitra"
                      value={reviewerName}
                      onChange={(e) => setReviewerName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-cream-dark/35 border border-espresso/15 focus:border-saffron focus:outline-none rounded-xl text-xs text-espresso placeholder:text-espresso/30"
                    />
                  </div>

                  {/* Rating Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-espresso-light mb-1.5 font-medium">Your Rating *</label>
                    <div className="flex gap-2 items-center py-1 bg-cream-dark/35 px-4 rounded-xl border border-espresso/15">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const starVal = i + 1;
                        return (
                          <button
                            type="button"
                            key={i}
                            onClick={() => setReviewerRating(starVal)}
                            className="p-0.5 focus:outline-none transition-transform active:scale-125"
                          >
                            <Star
                              size={18}
                              className={`${starVal <= reviewerRating ? 'text-gold fill-gold' : 'text-espresso/20'}`}
                            />
                          </button>
                        );
                      })}
                      <span className="text-[10px] text-espresso-light font-bold ml-2">
                        ({reviewerRating} Stars)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Comment area */}
                <div>
                  <label className="block text-xs font-semibold text-espresso-light mb-1.5">What did you love? *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell other foodies about the crispiness of pani puri, sweet dahi chutneys, speed of service, or our ITI More shop vibe..."
                    value={reviewerComment}
                    onChange={(e) => setReviewerComment(e.target.value)}
                    className="w-full px-4 py-2.5 bg-cream-dark/35 border border-espresso/15 focus:border-saffron focus:outline-none rounded-xl text-xs text-espresso placeholder:text-espresso/30 resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="bg-saffron hover:bg-saffron-hover text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md shadow-saffron/10 transition-colors"
                  >
                    Submit Review 🍲
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
