
var config = {
    style: 'mapbox://styles/vivekpatil17/clxxbv7rs002n01qt7yqlavve',
    accessToken: 'pk.eyJ1Ijoidml2ZWtwYXRpbDE3IiwiYSI6ImNseHV4bzJoMzFycXgybG9tN3ptZXd1d2QifQ.wbdQPBUeYDHlbwnmgHHI9g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true,
    theme: 'dark',
    use3dTerrain: false,
    auto: false,
    title: 'First LNG Vessel of the Year Crosses Red Sea, Conducts Two STS Transfers with Bunkering Vessels Detected by SynMax',
    // subtitle: 'On June 17, 2024, SynMax Leviaton detected that the LNG vessel Asya Energy (previously known as LNG Rivers and later as Trader IV) was heading towards the #BabElMandeb Strait for the first time in five months.',
    byline: 'By Leslie & Vivek ',
    callback: 'lineString',
    footer: 'Source: source citations, etc. <br>Synmax Leviaton <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Departure from Qatar',
            description: 'From Jan 2024 to June, Asya Energy was delivering cargoes from UAE and Qatar to India',
            location: {
                center: [63.70495, 22.84669],
                zoom: 3.93,
                pitch: 20.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'data3-bxiizk',
                    opacity: 1,
                    duration: 7000
                },
                {
                    layer: 'qatartooman-5tsvd1',
                    opacity: 0
                },
                {
                    layer: 'yemento-duqm-corrected-9ihbc0',
                    opacity: 0
                },
                {
                    layer: 'omansuez-bpsfqw',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'data3-bxiizk',
                    opacity: 1,
                    duration: 7000
                },
                {
                    layer: 'qatartooman-5tsvd1',
                    opacity: 0
                },
                {
                    layer: 'yemento-duqm-corrected-9ihbc0',
                    opacity: 0
                },
                {
                    layer: 'omansuez-bpsfqw',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-2',
            alignment: 'right',
            hidden: false,
            title: 'Delivering crago to India',
            description: 'The LNG vessel formerly known as Trader IV, a 2002-built ship with a capacity of 137,231 cubic meter capacity, has changed owners twice in recent years. Capital Gas purchased the carrier from Bonny Gas Transport for $35 million in September 2023 when it was named LNG Rivers. More recently, Capital Gas sold the now-renamed Asya Energy to an undisclosed buyer, as reported by the maritime publication Tradewinds on May 15.',
            callback: 'testCallback',
            location: {
                center: [68.95069, 22.30047],
                zoom: 5.51,
                pitch: 20.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'data3-bxiizk',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'qatartooman-5tsvd1',
                    opacity: 0
                },
                {
                    layer: 'yemento-duqm-corrected-9ihbc0',
                    opacity: 0
                },
                {
                    layer: 'omansuez-bpsfqw',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'data3-bxiizk',
                    opacity: 1,
                    duration: 7000
                },
                {
                    layer: 'qatartooman-5tsvd1',
                    opacity: 0
                },
                {
                    layer: 'yemento-duqm-corrected-9ihbc0',
                    opacity: 0
                },
                {
                    layer: 'omansuez-bpsfqw',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: 'Change of Ownership',
            description: 'The change of ownership could explain the low utilization of the tanker over the past few months, as well as its sudden change of course. The tanker’s recent activities have demonstrated out-of-the-ordinary shipping routes concentrated in the Gulf region without involving many transactions.',
            location: {
                center: [52.12367, 24.93653],
                zoom: 5.15,
                pitch: 23.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'data-1ellv2',
                    opacity: 1
                },
                {
                    layer: 'qatartooman-5tsvd1',
                    opacity: 0
                },
                {
                    layer: 'yemento-duqm-corrected-9ihbc0',
                    opacity: 0
                },
                {
                    layer: 'omansuez-bpsfqw',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-1ellv2',
                    opacity: 0
                },
                {
                    layer: 'qatartooman-5tsvd1',
                    opacity: 0
                },
                {
                    layer: 'yemento-duqm-corrected-9ihbc0',
                    opacity: 0
                },
                {
                    layer: 'omansuez-bpsfqw',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-4',
            alignment: 'fully',
            hidden: false,
            title: 'First STS Transfer detected by SynMax Theia',
            description: '<img src="STORY-1-TRIAL/images/unnamed (2).png" style="width:100%; height:40%;"><br>On June 17, 2024, SynMax Leviaton detected that the LNG vessel Asya Energy (previously known as LNG Rivers and later as Trader IV) was heading towards the #BabElMandeb Strait for the first time in five months.',
            location: {
                center: [56.72450, 21.71278],
                zoom: 5.43,
                pitch: 8.00,
                bearing: -30.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'qatartooman-5tsvd1',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'yemento-duqm-corrected-9ihbc0',
                    opacity: 1
                },
                {
                    layer: 'omansuez-bpsfqw',
                    opacity: 0
                },
                {
                    layer: 'data-1ellv2',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'qatartooman-5tsvd1',
                    opacity: 1
                },
                {
                    layer: 'omansuez-bpsfqw',
                    opacity: 1
                },
                {
                    layer: 'yemento-duqm-corrected-9ihbc0',
                    opacity: 1
                },
                {
                    layer: 'yemento-duqm-corrected-9ihbc0',
                    opacity: 0
                },
                {
                    layer: 'data-1ellv2',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-5',
            alignment: 'fully',
            hidden: false,
            title: 'First Ship Through the Canal This Year',
            description: 'Although the Asya Energy tanker is currently navigating the risky Gulf of Aden route, the parties involved in the transaction (and potential followers) may be testing the waters with a one-off transaction before endangering more crew members and ships. Just last week, the Houthis struck a bulk carrier with a drone, killing one crew member, as reported by SynMax Theia. The Houthis have successfully started using sea drones.',
            location: {
                center: [45.84067, 23.90089],
                zoom: 3.78,
                pitch: 8.00,
                bearing: -30.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'omansuez-bpsfqw',
                    opacity: 1,
                    duration: 1000,
                    pattern: {
                        property: 'fill-pattern',
                        transition: {
                            duration: 1000,
                            delay: 0
                        },
                        value: 'new-pattern-id' // Ensure the pattern is loaded in the style
                    }
                },
                {
                    layer: 'data3-bxiizk',
                    opacity: 0.3
                },
                {
                    layer: 'qatartooman-5tsvd1',
                    opacity: 0.3
                }
            ],
            onChapterExit: [
                {
                    layer: 'omansuez-bpsfqw',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'data3-bxiizk',
                    opacity: 0.3
                },
                {
                    layer: 'qatartooman-5tsvd1',
                    opacity: 0.3
                },
            ],
            image: ''
        },
        {
            id: 'chapter-6',
            alignment: 'center',
            hidden: false,
            title: 'Change in AIS signals',
            description: 'While the reopening of this route for LNG transactions remains an exception for now, the LNG industry–which is currently experiencing higher shipping costs and landing prices–has much to gain from reconnecting the Pacific and Atlantic basin via the Suez Canal. Since the beginning of the year, the Cape of Good Hope utilization has surged at the expense of trade optimization and lowering shipping emissions. ',
            location: {
                center: [30.84406, 33.24183],
                zoom: 6,
                pitch: 2.00,
                bearing: -20.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'postsuez-9p8kkf',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'animateRoute',
                    callback: function(map) {
                        const origin = [32.379182, 31.265289]; // Port Said, Egypt
                        const destination = [34.5, 32.5]; // Hadera, Israel
                        
                        // Wait for the flyTo animation to complete
                        setTimeout(() => {
                            const replayAnimation = animateRoutePoint(map, origin, destination);
                            
                            // Optionally, you can store the replayAnimation function if you want to use it later
                            // For example, you could add it to a global object or the chapter itself
                            // chapterData['chapter-6'].replayAnimation = replayAnimation;
                        }, 2000); // Adjust this delay as needed to match your flyTo duration
                    }
                }
            ],
            onChapterExit: [
                {
                    layer: 'postsuez-9p8kkf',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'animateRoute',
                    callback: function(map) {
                        // Remove the animation layers when exiting the chapter
                        if (map.getLayer('point')) map.removeLayer('point');
                        if (map.getLayer('route')) map.removeLayer('route');
                        if (map.getSource('point')) map.removeSource('point');
                        if (map.getSource('route')) map.removeSource('route');
                    }
                }
            ],
        },
        {
            id: 'chapter-7',
            alignment: 'center',
            hidden: false,
            title: 'STS with oil products tanker',
            description: '<img src="STORY-1-TRIAL/images/sd1.png" style="width:100%; height:40%;"><br>The mysterious Asya Energy–formerly Trader IV and LNG Rivers–emerged safely from the Red Sea and the Suez Canal (see our June 17, 2024 note and June 21, 2024 note). While waiting offshore near Port Said, it engaged in another ship-to-ship transfer, this time with the Vemahope tanker (see screenshot below). We note that there is an increasing use of GPS jamming in the region to disrupt the accuracy of GPS-guided munitions.',
            location: {
                center: [32.49662, 31.70657],
zoom: 7.20,
pitch: 2.00,
bearing: -20.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'postsuez-ct75m7',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'postsuez-ct75m7',
                    opacity: 0
                }
                
            ],
        }
    ],
   
};

  