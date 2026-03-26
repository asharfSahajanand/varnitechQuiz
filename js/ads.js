// (function () {
//       window.googletag = window.googletag || { cmd: [] };

//       let adSlot1, adSlot2, adSlot3, anchorSlot, interstialSlot;

//       let adsInitialized = false;
//       let adRefreshCount = 0;
//       const maxRefreshes = 3; // Limit refreshes
//       const refreshInterval = 1800000; // 30 minutes (reduced frequency)
//       let refreshTimer;

//       function setupAds() {
//         if (adsInitialized) {
//           console.log('Ads already initialized');
//           return;
//         }

//         // Check if googletag is fully loaded
//         if (!window.googletag || !googletag.pubads || !googletag.enums) {
//           console.log('Google Publisher Tag not ready, retrying in 1 second...');
//           setTimeout(setupAds, 1000);
//           return;
//         }

//         googletag.cmd.push(function () {
//           try {
//             // Configure pub ads service
//             const pubads = googletag.pubads();
//             pubads.enableSingleRequest();
//             pubads.setCentering(true);

//             // Enable lazy loading if available
//             if (pubads.enableLazyLoad) {
//               pubads.enableLazyLoad({
//                 fetchMarginPercent: 500,
//                 renderMarginPercent: 200,
//                 mobileScaling: 2.0
//               });
//             }

//             // Set targeting
//             pubads.setTargeting("ppseg", ["iab_audience.25", "iab_audience.5"]);
//             pubads.setTargeting("content_category", ["iab_content.3", "iab_content.5"]);

//             // Apply geotargeting if available
//             if (window.geoTarget) {
//               pubads.setLocation(window.geoTarget);
//             }

//             // Define ad slots with proper sizes
//             adSlot1 = googletag.defineSlot(
//               '/23330730517/Quizniva.com_d1',
//               [[300, 250], [320, 300], [250, 250], [300, 280], [300, 100]],
//               'ad-slot-1'
//             );

//             if (adSlot1) {
//               adSlot1.addService(pubads);
//             }

//             adSlot2 = googletag.defineSlot(
//               '/23330730517/Quizniva.com_d2',
//               [[300, 250], [320, 300], [250, 250], [300, 280], [300, 100]],
//               'ad-slot-2'
//             );

//             if (adSlot2) {
//               adSlot2.addService(pubads);
//             }

//             // Define ad slot 3
//             adSlot3 = googletag.defineSlot(
//               '/23330730517/Quizniva.com_d3',
//               [[300, 250], [320, 300], [250, 250], [300, 280], [300, 100]],
//               'ad-slot-3'
//             );

//             if (adSlot3) {
//               adSlot3.addService(pubads);
//             }

           

//             // Event listeners
//             pubads.addEventListener('slotRenderEnded', function (event) {
//               const slotId = event.slot.getSlotElementId();
//               const isEmpty = event.isEmpty;
//               const slotElement = document.getElementById(slotId);

//               console.log(`Ad slot ${slotId} render ended. Empty: ${isEmpty}`);

//               if (slotElement && slotElement.parentElement) {
//                 const container = slotElement.parentElement;
//                 if (isEmpty) {
//                   container.style.display = 'none';
//                   console.log(`Hidden empty ad container: ${slotId}`);
//                 } else {
//                   container.style.display = 'block';
//                   container.style.minHeight = '250px'; // Ensure container has height
//                   console.log(`Showing ad container: ${slotId}`);
//                 }
//               }
//             });

//             pubads.addEventListener('slotOnload', function (event) {
//               const slotId = event.slot.getSlotElementId();
//               console.log(`Ad loaded successfully: ${slotId}`);
//             });

//             // Enable services
//             googletag.enableServices();
//             adsInitialized = true;
//             console.log('Google Ad Manager initialized successfully');

//             // Display ads after initialization
//             setTimeout(displayAllAds, 100);

//             // Setup controlled refresh
//             // setupControlledRefresh();

//           } catch (error) {
//             console.error('Error in setupAds:', error);
//           }
//         });
//       }


//       // old gam based
//       // function displayAllAds() {
//       //   googletag.cmd.push(function () {
//       //     try {
//       //       // Display first ad slot
//       //       const slot1Element = document.getElementById('ad-slot-1');
//       //       if (slot1Element && adSlot1) {
//       //         googletag.display('ad-slot-1');
//       //         console.log('Displaying ad-slot-1');
//       //       } else {
//       //         console.log('ad-slot-1 element or slot not found');
//       //       }

//       //       // Display second ad slot
//       //       const slot2Element = document.getElementById('ad-slot-2');
//       //       if (slot2Element && adSlot2) {
//       //         googletag.display('ad-slot-2');
//       //         console.log('Displaying ad-slot-2');
//       //       } else {
//       //         console.log('ad-slot-2 element or slot not found');
//       //       }

//       //       // Display third ad slot
//       //       const slot3Element = document.getElementById('ad-slot-3');
//       //       if (slot3Element && adSlot3) {
//       //         googletag.display('ad-slot-3');
//       //         console.log('Displaying ad-slot-3');
//       //       } else {
//       //         console.log('ad-slot-3 element or slot not found');
//       //       }

//       //     } catch (error) {
//       //       console.error('Error displaying ads:', error);
//       //     }
//       //   });
//       // }

//       function displayAllAds() {
//   try {
//     loadAdsenseAd('ad-slot-1', '4306431074', 300, 250);
//     loadAdsenseAd('ad-slot-2', '9890531561', 320, 300);
//     loadAdsenseAd('ad-slot-3', '7835213866', 250, 250);
//   } catch (error) {
//     console.error('Error displaying AdSense ads:', error);
//   }
// }

// function loadAdsenseAd(containerId, slotId, width, height) {
//   const container = document.getElementById(containerId);
//   if (!container) {
//     console.log(containerId + ' not found');
//     return;
//   }

//   container.innerHTML = `
//     <ins class="adsbygoogle"
//          style="display:inline-block;width:${width}px;height:${height}px"
//          data-ad-client="ca-pub-1615420563101212"
//          data-ad-slot="${slotId}">
//     </ins>
//   `;

//   (adsbygoogle = window.adsbygoogle || []).push({});
//   console.log('AdSense loaded in ' + containerId);
// }
//       function setupControlledRefresh() {
//         // Clear any existing timer
//         if (refreshTimer) {
//           clearInterval(refreshTimer);
//         }

//         // Only refresh if we haven't exceeded max refreshes
//         if (adRefreshCount >= maxRefreshes) {
//           console.log('Maximum ad refreshes reached. No more refreshes.');
//           return;
//         }

//         refreshTimer = setInterval(function () {
//           if (adRefreshCount >= maxRefreshes) {
//             clearInterval(refreshTimer);
//             console.log('Stopping ad refresh - max refreshes reached');
//             return;
//           }

//           try {
//             const slotsToRefresh = [];
//             if (adSlot1) slotsToRefresh.push(adSlot1);
//             if (adSlot2) slotsToRefresh.push(adSlot2);
//             if (adSlot3) slotsToRefresh.push(adSlot3);

//             if (slotsToRefresh.length > 0) {
//               googletag.cmd.push(function () {
//                 googletag.pubads().refresh(slotsToRefresh);
//                 adRefreshCount++;
//                 console.log(`Ads refreshed (${adRefreshCount}/${maxRefreshes})`);
//               });
//             }
//           } catch (error) {
//             console.error('Error refreshing ads:', error);
//             clearInterval(refreshTimer);
//           }
//         }, refreshInterval);
//       }

//       // Initialize ads when DOM is ready with better timing
//       function initializeAds() {
//         // Wait for both DOM and googletag to be ready
//         const checkReadiness = () => {
//           if (document.readyState !== 'loading' && window.googletag && googletag.cmd) {
//             console.log('Both DOM and Google Publisher Tag are ready');
//             setupAds();
//           } else {
//             console.log('Waiting for readiness...');
//             setTimeout(checkReadiness, 500);
//           }
//         };

//         checkReadiness();
//       }

//       // Start initialization immediately
//       initializeAds();

//       // Cleanup on page unload
//       window.addEventListener('beforeunload', function () {
//         if (refreshTimer) {
//           clearInterval(refreshTimer);
//         }
//       });

//       // Global access to ad slots
//       window.getAdSlots = function () {
//         return { adSlot1, adSlot2, adSlot3 };
//       };
//     })();

// (function () {

//   function displayAllAds() {
//     loadAdsenseAd('ad-slot-1', '4306431074', 300, 250);
//     loadAdsenseAd('ad-slot-2', '9890531561', 320, 300);
//     loadAdsenseAd('ad-slot-3', '7835213866', 250, 250);
//   }

//   function loadAdsenseAd(containerId, slotId, width, height) {
//     const container = document.getElementById(containerId);
//     if (!container) return;

//     container.innerHTML = `
//       <ins class="adsbygoogle"
//            style="display:inline-block;width:${width}px;height:${height}px"
//            data-ad-client="ca-pub-1615420563101212"
//            data-ad-slot="${slotId}">
//       </ins>
//     `;

//     (adsbygoogle = window.adsbygoogle || []).push({});
//   }

//   document.addEventListener("DOMContentLoaded", displayAllAds);

// })();


(function () {

  // =============================================
  // H5 Games Ad Config - Reward ke liye zaroori
  // =============================================
  window.adsbygoogle = window.adsbygoogle || [];

  if (typeof adConfig === 'function') {
    adConfig({
      preloadAdBreaks: 'on',
      sound: 'off',
      onReady: function () {
        console.log('H5 adConfig ready');
      }
    });
  }

  // =============================================
  // Reward Ad - naam showRewardAd (HTML se match)
  // =============================================
  window.showRewardAd = function () {
    if (typeof adBreak !== 'function') {
      console.warn('adBreak not available');
      return;
    }

    adBreak({
      type: 'reward',
      name: 'reward-coin',

      beforeReward: function (showAdFn) {
        showAdFn();
      },

      adViewed: function () {
        console.log('Reward mil gaya');
        if (typeof showToast === 'function') {
          showToast({ title: 'Success!', msg: '100 coins added!' });
        }
        // user.coins += 100;
      },

      adDismissed: function () {
        console.log('User ne ad close kiya');
        if (typeof showToast === 'function') {
          showToast({ title: 'Oops!', msg: 'Ad complete nahi hua' });
        }
      },

      adBreakDone: function (info) {
        console.log('Ad break status:', info.breakStatus);
      }
    });
  };

  // =============================================
  // Display Ads
  // =============================================
  function loadAdsenseAd(containerId, slotId, width, height) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Duplicate check - agar pehle se hai to skip
    if (container.querySelector('.adsbygoogle')) return;

    container.innerHTML = `
      <ins class="adsbygoogle"
           style="display:inline-block;width:${width}px;height:${height}px"
           data-ad-client="ca-pub-1615420563101212"
           data-ad-slot="${slotId}">
      </ins>
    `;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn('AdSense push error:', e);
    }
  }

  function displayAllAds() {
    loadAdsenseAd('ad-slot-1', '4306431074', 300, 250);
    loadAdsenseAd('ad-slot-2', '9890531561', 320, 300);
    loadAdsenseAd('ad-slot-3', '7835213866', 250, 250);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', displayAllAds);
  } else {
    displayAllAds();
  }

})();