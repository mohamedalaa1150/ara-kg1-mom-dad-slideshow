/* @ds-bundle: {"format":4,"namespace":"SelahKG","components":[{"name":"LessonFrame"},{"name":"Scene"},{"name":"Background"},{"name":"LogoBadge"},{"name":"LessonChip"},{"name":"TitleCard"},{"name":"SectionTitle"},{"name":"ObjectivesCard"},{"name":"StoryCard"},{"name":"ImageFrame"},{"name":"SentenceStrip"},{"name":"CategoryPill"},{"name":"WordPill"},{"name":"AnswerChip"},{"name":"LetterCard"},{"name":"FlowBox"},{"name":"Arrow"},{"name":"QuestionPanel"},{"name":"AnswerButton"},{"name":"TrueFalseButton"},{"name":"FeedbackCard"},{"name":"RoundButton"},{"name":"Sticker"},{"name":"ArText"},{"name":"Icon"},{"name":"TargetIcon"}]} */
(function () {
  var React = window.React, h = React.createElement;
  var C = {"canvas":"#fff6d2","canvas-decor":"#fceec3","logo-ink":"#666666","white":"#ffffff","sky-500":"#3ac3ed","sky-300":"#71dbf4","sky-200":"#85dbf9","sky-100":"#5edaf7","sky-700":"#27adcc","sky-dash":"#3096e2","sky-mark":"#2b99fc","title-500":"#779ed8","title-700":"#4f73ba","lilac-50":"#e9f5ff","lilac-100":"#c5e0fc","lilac-300":"#9dc0fc","lilac-600":"#6585d6","ink-heading":"#0979b7","ink-body":"#4c60a8","ink-story":"#5679bf","ink-question":"#00859b","ink-answer":"#496bad","ink-feedback":"#435fa3","pink-500":"#ea6cac","pink-700":"#cc5295","gold-ring":"#e7c385","story-edge":"#d75e99","story-rim":"#f4abbe","story-dash":"#f4d760","letter-rim":"#a09aca","letter-dash":"#7276df","paper":"#fcfcfc","aqua-50":"#cafaff","aqua-500":"#35c1d8","answer-200":"#c0d5f9","answer-400":"#6ba5f9","green-100":"#6de3a8","green-500":"#62cf9d","green-700":"#50ab7b","gold-100":"#e2d66f","gold-500":"#cbc368","gold-700":"#c4b441","success-300":"#a7ea96","success-500":"#8edd78","error-300":"#ffa1a1","error-500":"#f98585","button-300":"#6ad2ea","button-700":"#1793a0","teal-300":"#2de2d0","teal-500":"#27c2b3","teal-700":"#00a591","sun-400":"#fcc34f","highlight":"#efba0f","target-coral":"#f49090","target-side":"#b64147","target-navy":"#294b8e","target-glow":"#8cc2f2","shadow-soft":"rgba(0, 0, 0, 0.11)","shadow-mid":"rgba(0, 0, 0, 0.18)","shadow-deep":"rgba(0, 0, 0, 0.28)","shadow-cool":"rgba(30, 70, 120, 0.15)"};
  var ICONS = {"letters-abt":{"w":245,"h":250,"layers":[{"fill":"#2b99fc","d":"M133.5 227.7 C130.2 226.4 125.5 224.3 123.0 222.9 C118.7 220.5 118.5 220.2 118.7 216.1 C119.0 210.2 125.1 197.4 128.4 195.9 C130.3 195.0 132.2 195.2 137.7 196.8 C146.8 199.6 153.0 204.1 153.0 207.8 C152.9 211.6 147.6 224.8 144.9 227.6 C142.2 230.5 141.2 230.5 133.5 227.7 Z M59.7 186.2 C57.9 184.0 57.4 148.7 59.1 147.4 C59.9 146.8 68.4 145.3 78.0 144.1 C103.6 141.0 147.1 131.6 152.9 128.0 C154.0 127.4 153.0 125.0 148.1 116.5 C142.9 107.6 142.1 105.6 143.1 104.3 C145.1 102.0 171.9 88.8 173.2 89.6 C175.2 90.9 180.9 104.7 183.5 114.6 C187.9 131.5 187.8 152.2 183.4 157.2 C179.0 162.0 152.8 171.8 127.7 178.0 C100.7 184.7 62.3 189.3 59.7 186.2 Z M193.6 174.2 C193.2 173.5 192.9 157.6 193.0 138.8 C193.0 119.9 192.6 95.1 192.0 83.5 C191.2 66.9 191.2 62.3 192.2 61.3 C193.9 59.7 221.8 58.0 223.0 59.5 C224.3 61.1 226.2 117.5 225.9 143.8 C225.4 171.8 225.8 170.8 215.7 173.0 C207.5 174.8 194.4 175.5 193.6 174.2 Z M46.0 127.4 C32.7 126.2 12.4 122.7 10.9 121.4 C9.0 119.7 9.7 113.3 13.6 98.1 C16.8 85.2 17.0 85.1 27.3 86.6 C42.8 88.9 66.4 90.2 85.7 89.8 C96.2 89.7 105.1 89.2 105.4 88.9 C105.8 88.6 104.6 83.6 102.9 77.9 C99.9 67.7 99.9 67.5 101.8 65.9 C102.9 65.1 109.5 63.1 116.6 61.5 L129.4 58.7 L131.1 60.8 C133.5 63.8 135.4 81.1 134.6 92.0 C133.9 100.9 131.1 113.0 128.5 118.1 C126.4 122.0 124.2 123.0 112.1 125.2 C104.0 126.6 95.5 127.2 76.0 127.4 C62.0 127.6 48.5 127.6 46.0 127.4 Z M42.0 69.4 C39.0 67.4 35.1 64.4 33.3 62.8 L30.1 59.7 L32.7 54.8 C36.2 48.3 41.8 42.0 43.9 42.0 C46.1 42.0 54.5 47.3 58.9 51.3 C62.1 54.4 62.3 54.4 63.4 52.6 C65.7 48.7 72.3 42.0 73.9 42.0 C76.1 42.0 87.6 49.6 89.5 52.3 C90.3 53.5 91.0 55.2 91.0 56.1 C91.0 58.0 81.4 71.9 79.5 72.6 C77.7 73.3 71.5 70.0 65.2 65.1 C62.4 62.8 59.9 61.0 59.7 61.0 C59.5 61.0 57.2 63.7 54.7 67.0 C52.1 70.3 49.4 73.0 48.7 73.0 C48.0 73.0 45.0 71.4 42.0 69.4 Z M189.5 49.7 C187.5 46.8 187.6 41.7 189.8 39.7 C190.7 38.9 192.7 37.8 194.2 37.5 C197.5 36.6 197.6 36.5 195.0 31.5 C191.6 24.9 192.7 20.5 199.2 14.3 C203.0 10.6 206.8 9.0 211.4 9.0 C215.9 9.0 220.0 13.4 220.0 18.2 C220.0 22.7 218.1 24.4 214.0 23.5 C212.4 23.1 209.6 23.1 208.0 23.5 C204.5 24.3 203.1 27.8 204.8 31.6 C205.9 33.9 206.1 34.0 214.7 33.4 C225.7 32.6 226.8 33.4 224.4 40.2 C223.6 42.7 222.1 45.5 221.2 46.3 C220.2 47.1 215.1 48.2 208.8 49.0 C202.9 49.6 196.5 50.5 194.5 51.0 C191.5 51.7 190.7 51.5 189.5 49.7 Z"}]},"arrow-curve":{"w":100,"h":300,"layers":[{"fill":"#fcc34f","d":"M27.0 284.5 C24.9 282.3 24.8 281.5 25.4 275.3 C26.7 262.7 31.2 234.5 32.2 233.2 C33.8 231.2 36.1 231.8 42.3 235.6 C45.5 237.6 48.3 239.0 48.4 238.9 C48.6 238.7 50.6 235.5 52.9 231.8 C63.2 214.8 69.8 198.0 74.1 178.0 C77.2 163.8 77.5 131.4 74.7 117.5 C71.7 103.0 67.3 90.4 59.9 75.5 C51.4 58.2 42.8 46.0 28.6 31.3 L17.7 19.9 L19.8 17.8 L21.9 15.7 L26.8 19.8 C36.7 28.1 51.0 44.1 58.4 55.2 C70.8 73.9 80.1 96.4 85.1 120.0 C87.9 133.3 88.8 161.3 87.0 176.9 C84.4 199.8 75.6 225.4 64.4 243.2 C63.1 245.3 62.0 247.3 62.0 247.8 C62.0 248.2 63.6 249.4 65.6 250.5 C67.6 251.6 71.3 254.3 73.7 256.5 C78.0 260.5 78.1 260.6 76.2 262.3 C75.2 263.2 69.6 266.5 63.9 269.6 C58.2 272.6 52.6 276.0 51.4 277.1 C50.3 278.1 48.5 279.0 47.5 279.0 C46.5 279.0 42.4 280.8 38.4 283.0 C34.4 285.2 30.7 287.0 30.2 287.0 C29.7 287.0 28.3 285.9 27.0 284.5 Z"}]},"tf-check":{"w":150,"h":140,"layers":[{"fill":"#6585d6","d":"M46.2 130.3 C42.0 128.2 38.8 123.5 31.0 108.0 C19.5 85.1 18.0 78.9 21.9 71.1 C24.1 66.8 26.5 65.0 30.0 65.0 C33.1 65.0 40.2 72.1 46.6 81.6 L52.3 90.0 L57.2 81.7 C70.6 59.2 99.3 24.5 109.5 18.6 C111.9 17.2 115.4 16.0 117.3 16.0 C121.1 16.0 126.3 19.1 129.3 23.2 C131.1 25.6 131.2 26.4 130.1 31.6 C127.9 42.6 122.3 51.2 99.5 78.0 C92.3 86.5 80.2 101.2 72.7 110.7 C55.9 131.9 53.2 133.9 46.2 130.3 Z"}]},"tf-cross":{"w":150,"h":140,"layers":[{"fill":"#6585d6","d":"M25.3 132.6 C22.1 131.1 20.0 128.4 20.0 125.6 C20.0 124.1 34.1 108.4 55.2 86.3 C60.6 80.7 65.0 75.5 65.0 74.6 C65.0 73.8 59.0 67.1 51.6 59.8 C37.1 45.3 32.9 39.0 34.6 34.1 C36.0 30.3 40.1 28.6 43.8 30.2 C45.5 30.9 53.6 37.8 62.0 45.5 C70.3 53.2 77.6 59.7 78.2 59.9 C78.8 60.1 88.7 50.5 100.4 38.6 C123.1 15.3 124.3 14.5 128.8 19.3 C130.0 20.6 131.0 22.4 131.0 23.4 C131.0 26.6 118.1 43.6 101.1 62.8 C96.1 68.5 92.0 73.4 92.0 73.7 C92.0 74.0 99.7 82.0 109.0 91.6 C118.4 101.1 126.5 110.1 127.0 111.6 C128.2 114.8 127.5 117.7 124.7 120.8 C120.5 125.4 117.2 123.3 96.2 102.7 L79.8 86.6 L73.2 93.6 C69.5 97.5 61.6 105.9 55.7 112.3 C37.2 132.3 32.1 135.6 25.3 132.6 Z"}]},"badge-check":{"w":160,"h":145,"layers":[{"fill":"#ffffff","d":"M47.2 133.0 C43.2 130.5 39.8 125.3 31.6 108.6 C24.0 93.1 19.0 80.8 19.0 77.6 C19.0 74.3 21.7 67.0 23.8 64.7 C30.1 57.7 36.7 61.6 49.2 79.9 C52.0 84.1 54.6 87.9 55.0 88.3 C55.4 88.7 58.1 84.9 61.1 79.8 C67.7 68.3 89.6 39.1 102.0 25.1 C111.0 15.1 120.0 8.0 125.6 6.6 C129.0 5.7 138.4 10.1 140.7 13.6 C143.2 17.5 142.1 27.3 138.3 35.1 C134.4 42.8 123.0 58.1 108.4 75.0 C102.5 81.9 89.8 97.3 80.3 109.3 C70.7 121.3 61.5 132.0 59.7 133.0 C55.6 135.5 51.4 135.5 47.2 133.0 Z"}]},"badge-cross":{"w":160,"h":145,"layers":[{"fill":"#ffffff","d":"M28.5 133.3 C26.2 132.7 23.2 130.3 21.9 127.8 C20.2 124.5 19.7 125.1 50.4 92.2 C60.4 81.6 68.8 72.3 69.3 71.5 C69.9 70.4 66.6 66.6 56.8 57.1 C44.2 44.9 37.9 36.8 36.5 31.0 C35.6 27.3 39.2 23.0 43.1 23.0 C47.7 23.0 49.2 24.1 66.3 39.9 C75.0 47.9 82.9 54.6 83.9 54.8 C85.0 55.0 88.9 51.5 95.0 44.8 C117.0 20.8 129.3 9.0 132.5 9.0 C134.6 9.0 140.0 14.0 140.0 15.9 C140.0 19.6 119.6 46.1 104.4 62.2 C101.4 65.3 99.0 68.7 99.0 69.7 C99.0 70.7 105.0 77.4 112.6 85.0 C120.1 92.4 128.5 101.2 131.2 104.4 C135.8 109.8 136.2 110.7 135.7 114.3 C135.0 119.4 132.5 122.0 128.4 122.0 C125.8 122.0 123.5 120.5 115.8 113.6 C110.7 109.0 102.0 100.7 96.5 95.1 C91.0 89.5 85.8 85.0 85.0 85.0 C84.1 85.0 78.7 90.3 73.0 96.8 C61.0 110.4 41.9 129.4 37.5 132.1 C34.5 134.0 32.4 134.2 28.5 133.3 Z"}]},"icon-replay":{"w":120,"h":115,"layers":[{"fill":"#ffffff","d":"M49.7 100.0 C34.7 96.2 20.9 81.5 17.0 65.2 C16.3 62.1 15.9 56.5 16.2 52.0 C16.8 41.7 21.0 33.0 29.5 24.3 C34.8 18.8 36.1 18.0 39.2 18.0 C41.9 18.0 43.3 18.6 44.4 20.2 C47.1 24.1 46.3 26.3 40.0 32.3 C31.8 40.0 29.0 46.1 29.0 56.0 C29.0 73.7 41.5 86.6 59.6 87.8 C65.8 88.2 67.5 87.9 72.9 85.5 C84.6 80.2 92.0 68.6 92.0 55.6 C92.0 47.4 89.8 41.2 84.8 35.5 C81.5 31.8 74.7 27.0 72.6 27.0 C72.4 27.0 71.9 28.3 71.5 30.0 C71.1 31.6 70.5 33.2 70.1 33.4 C68.7 34.3 54.7 19.3 55.3 17.7 C55.6 16.8 59.3 13.6 63.5 10.5 C72.2 4.1 74.6 3.9 73.7 9.6 C73.2 12.3 73.5 13.2 74.8 13.7 C80.4 15.5 87.8 20.1 92.2 24.4 C114.5 46.4 105.6 87.8 76.3 98.2 C69.7 100.5 55.6 101.5 49.7 100.0 Z"}]},"icon-next":{"w":120,"h":115,"layers":[{"fill":"#ffffff","d":"M65.0 83.1 C64.5 82.0 64.0 78.4 64.0 75.1 L64.0 69.0 L37.2 68.8 L10.5 68.5 L10.5 57.0 L10.5 45.5 L37.0 45.0 L63.5 44.5 L63.8 38.0 C64.1 31.1 65.1 29.0 68.1 29.0 C69.8 29.0 101.4 46.0 110.3 51.7 C113.4 53.6 114.1 54.6 113.8 56.8 C113.5 59.1 110.8 61.2 92.5 72.2 C71.1 85.1 67.0 86.7 65.0 83.1 Z"}]}};
  var DECOR_D = "M0.0 712.1 L0.0 344.2 L11.9 349.5 C63.1 372.5 100.7 378.7 122.3 367.8 C134.6 361.7 141.3 352.9 151.9 328.9 C159.9 310.7 162.5 306.3 169.4 299.2 C191.2 276.5 198.0 303.0 186.5 365.5 C176.0 422.3 155.0 485.1 129.3 536.4 C73.3 648.3 50.8 798.1 63.6 975.0 C65.8 1006.1 70.9 1052.7 74.6 1075.8 L75.3 1080.0 L37.6 1080.0 L0.0 1080.0 L0.0 712.1 Z M1633.5 1067.9 C1582.3 1062.6 1539.7 1036.0 1525.1 1000.2 C1519.4 986.4 1518.5 981.6 1518.6 966.0 C1518.7 953.3 1519.0 950.4 1521.3 942.7 C1530.0 914.4 1550.3 890.9 1577.7 877.8 C1609.6 862.5 1644.0 864.5 1670.3 883.4 C1678.8 889.4 1692.1 903.5 1695.0 909.4 C1701.4 922.6 1697.5 941.3 1685.8 953.6 C1675.7 964.3 1665.5 968.5 1651.5 967.8 C1637.2 967.1 1626.4 960.4 1617.5 946.9 C1611.5 937.8 1606.6 933.0 1600.0 929.7 C1585.7 922.5 1569.0 929.8 1563.0 945.6 C1549.5 981.9 1576.0 1017.9 1619.3 1021.8 C1665.5 1026.1 1714.5 997.9 1741.2 951.6 C1743.4 947.7 1747.3 941.4 1749.8 937.6 C1769.0 907.8 1799.9 898.0 1818.0 915.8 C1838.1 935.6 1828.4 970.6 1792.5 1007.9 C1750.3 1051.8 1691.5 1073.9 1633.5 1067.9 Z M1913.2 1033.5 C1897.2 1018.8 1875.6 986.6 1861.7 957.0 C1838.6 907.8 1826.2 859.2 1826.0 817.6 C1826.0 798.3 1836.7 785.2 1847.0 792.2 C1853.2 796.4 1855.0 801.1 1860.0 825.0 C1867.8 862.4 1887.4 901.9 1913.0 931.7 L1920.0 939.9 L1919.8 989.6 L1919.5 1039.4 L1913.2 1033.5 Z M1736.7 857.9 C1714.9 854.6 1705.6 827.8 1720.6 811.1 C1732.1 798.3 1750.9 798.3 1762.4 811.1 C1780.4 831.2 1763.6 861.8 1736.7 857.9 Z M1671.8 856.6 C1650.6 850.7 1643.8 823.9 1659.6 808.8 C1677.7 791.6 1707.6 804.2 1707.5 829.0 C1707.4 847.6 1689.4 861.6 1671.8 856.6 Z M1787.4 820.7 C1783.6 817.3 1783.5 816.9 1783.6 810.8 C1783.6 804.0 1785.1 800.2 1790.0 794.7 L1792.9 791.4 L1787.0 791.8 C1771.3 792.9 1763.7 782.3 1767.4 764.4 C1771.7 743.0 1787.7 725.2 1805.7 721.9 C1812.2 720.7 1815.3 721.6 1819.6 726.1 C1825.7 732.5 1823.0 747.4 1814.4 755.0 C1811.0 757.9 1810.7 758.0 1808.7 756.5 C1801.5 751.3 1794.5 753.3 1790.1 761.7 C1786.9 768.0 1792.3 776.0 1799.9 776.0 C1808.4 776.0 1815.4 770.2 1821.4 758.1 C1828.5 744.1 1838.8 739.5 1848.2 746.1 C1851.9 748.8 1854.0 753.0 1854.0 757.9 C1854.0 762.3 1852.4 764.0 1842.4 770.0 C1839.2 771.9 1833.1 776.9 1829.0 781.0 C1822.2 787.8 1820.7 790.0 1814.2 803.2 C1806.1 819.7 1803.2 822.9 1795.6 823.7 C1791.7 824.2 1790.8 823.9 1787.4 820.7 Z M1821.5 712.3 C1746.5 706.0 1681.5 650.6 1670.4 583.5 C1659.2 515.1 1724.3 467.7 1791.2 495.6 C1822.0 508.4 1841.0 536.7 1841.0 569.6 C1841.0 588.0 1837.2 596.7 1825.7 604.1 C1805.7 617.0 1778.9 609.8 1769.0 588.8 C1764.7 579.8 1764.3 573.9 1767.0 560.8 C1770.6 544.0 1767.8 533.9 1757.8 527.3 C1751.6 523.2 1740.1 523.2 1731.5 527.4 C1722.9 531.6 1712.2 542.7 1709.2 550.5 C1695.5 586.1 1721.5 626.6 1767.8 641.9 C1791.2 649.7 1816.9 650.2 1845.5 643.3 C1876.7 635.9 1902.8 644.7 1908.6 664.8 C1917.4 694.9 1876.8 717.0 1821.5 712.3 Z M1665.3 708.6 C1642.6 701.5 1642.3 668.2 1664.9 660.5 C1680.7 655.1 1697.6 666.5 1698.3 682.8 C1699.0 701.0 1682.4 713.9 1665.3 708.6 Z M1896.0 517.1 C1778.6 477.8 1728.9 415.5 1749.9 334.0 C1751.5 327.7 1755.6 311.9 1758.9 299.0 C1782.2 208.3 1795.2 117.1 1798.6 19.2 L1799.3 0.0 L1859.6 0.0 L1920.0 0.0 L1920.0 262.0 C1920.0 510.9 1919.9 524.0 1918.2 524.0 C1917.3 523.9 1907.3 520.8 1896.0 517.1 Z M76.5 352.9 C43.8 348.7 21.5 316.1 29.5 284.5 C36.8 255.9 65.8 237.4 94.0 243.4 C136.8 252.4 153.5 303.4 124.2 335.2 C111.7 348.7 94.3 355.1 76.5 352.9 Z M21.5 344.8 C16.5 342.1 14.4 334.9 17.0 329.9 C19.8 324.7 28.4 323.6 33.0 327.8 C42.0 335.8 32.0 350.6 21.5 344.8 Z M0.7 311.4 C-0.3 310.4 -0.2 288.2 0.8 287.6 C2.4 286.6 8.6 289.0 10.9 291.4 C13.7 294.4 14.7 301.4 12.8 304.9 C10.5 309.1 2.7 313.3 0.7 311.4 Z M0.0 243.0 L0.0 222.0 L5.4 222.0 C12.2 222.0 15.6 223.2 19.9 227.3 C34.2 240.8 25.1 264.0 5.5 264.0 L0.0 264.0 L0.0 243.0 Z M65.8 233.6 C47.6 228.7 40.7 205.7 53.2 191.5 C63.6 179.7 80.6 179.5 91.3 190.9 C101.5 201.8 101.2 216.0 90.6 226.6 C83.2 234.1 75.6 236.2 65.8 233.6 Z M120.4 232.6 C111.3 228.6 112.0 216.1 121.4 213.0 C127.8 210.9 135.0 216.3 135.0 223.0 C135.0 226.7 132.0 231.1 128.5 232.6 C124.4 234.3 124.3 234.3 120.4 232.6 Z M13.5 214.1 C1.8 208.9 4.1 191.0 16.7 189.3 C29.4 187.6 36.4 202.5 27.1 211.4 C23.9 214.4 17.3 215.8 13.5 214.1 Z M32.2 181.3 C21.5 176.0 19.0 161.9 27.3 153.1 C35.2 144.8 46.3 144.9 53.7 153.3 C59.9 160.3 60.1 169.1 54.5 176.6 C49.9 182.7 39.4 184.9 32.2 181.3 Z M0.5 137.8 C0.2 137.0 0.1 131.7 0.2 125.9 L0.5 115.5 L4.0 115.2 C14.8 114.3 20.6 128.4 12.5 136.0 C9.5 138.8 1.3 140.0 0.5 137.8 Z M33.0 133.7 C27.7 131.0 27.8 122.8 33.2 120.6 C37.1 118.9 39.5 119.5 42.0 122.8 C47.1 129.2 40.2 137.5 33.0 133.7 Z M23.0 99.1 C12.0 95.7 4.0 85.5 4.0 74.7 C4.0 67.8 6.1 62.8 11.5 57.3 C31.7 36.5 64.1 59.9 51.5 86.3 C46.9 96.0 33.2 102.2 23.0 99.1 Z M235.5 78.6 C229.0 75.7 225.3 69.0 226.4 62.2 C228.6 48.5 246.9 45.0 254.2 56.9 C261.7 69.0 248.3 84.5 235.5 78.6 Z M286.0 70.9 C273.3 68.8 259.8 58.4 254.3 46.3 C248.5 33.8 250.4 15.9 258.5 4.7 L262.0 -0.0 L292.9 -0.0 L323.8 0.0 L326.2 3.3 C345.8 29.0 331.0 65.7 298.8 71.0 C295.3 71.5 292.3 71.9 292.0 71.9 C291.7 71.8 289.0 71.4 286.0 70.9 Z M217.3 51.8 C210.2 49.9 207.6 41.0 212.5 35.2 C220.5 25.7 235.3 35.8 229.6 46.8 C227.4 51.1 222.3 53.2 217.3 51.8 Z M51.3 49.0 C46.3 47.0 44.1 38.5 47.3 33.6 C50.5 28.8 59.6 27.7 63.3 31.8 C71.4 40.8 62.6 53.5 51.3 49.0 Z M17.1 46.0 C15.3 44.9 16.2 41.6 18.4 41.2 C20.5 40.8 22.1 42.6 21.3 44.6 C20.7 46.3 18.6 47.0 17.1 46.0 Z M238.7 40.9 C236.9 38.4 237.6 35.3 240.2 33.9 C244.7 31.5 249.3 36.3 246.5 40.6 C244.6 43.6 240.6 43.8 238.7 40.9 Z M24.5 37.3 C12.8 34.1 11.5 17.8 22.6 12.9 C30.5 9.3 39.0 14.0 40.6 22.7 C42.2 31.1 32.8 39.6 24.5 37.3 Z M79.5 30.0 C78.0 28.3 77.9 27.6 78.8 25.5 C81.1 20.4 88.0 21.4 88.0 26.8 C88.0 32.0 83.0 33.9 79.5 30.0 Z M227.5 28.1 C215.2 22.7 218.3 4.5 231.7 3.3 C244.0 2.2 250.1 15.4 241.7 24.7 C238.2 28.4 231.8 30.0 227.5 28.1 Z M59.7 25.0 C56.3 22.3 56.0 17.0 59.0 14.0 C65.4 7.6 76.0 17.0 70.2 23.9 C67.6 27.1 63.0 27.6 59.7 25.0 Z M179.2 22.5 C175.4 19.3 174.4 15.3 176.4 10.7 C180.7 0.3 196.0 3.5 196.0 14.8 C196.0 23.8 186.1 28.3 179.2 22.5 Z M207.4 23.0 C204.7 22.0 202.0 18.2 202.0 15.7 C202.0 12.4 207.7 7.7 210.8 8.5 C215.1 9.5 217.0 11.9 217.0 16.0 C217.0 21.4 212.2 24.9 207.4 23.0 Z M106.7 17.2 C103.5 13.7 103.5 10.3 106.8 7.0 C110.5 3.4 113.0 3.2 116.6 6.3 C122.1 11.1 119.0 19.0 111.5 19.0 C109.7 19.0 107.6 18.2 106.7 17.2 Z M84.8 15.9 C81.2 13.9 83.6 7.0 87.9 7.0 C90.0 7.0 93.0 10.0 93.0 12.2 C93.0 15.7 88.2 17.9 84.8 15.9 Z M150.2 12.8 C147.6 10.2 150.2 4.0 153.8 4.0 C155.5 4.0 159.0 7.7 159.0 9.4 C159.0 13.1 152.9 15.5 150.2 12.8 Z";
  var LOGO_D = "M105.2 163.8 C103.4 161.6 105.5 148.5 108.5 143.4 C109.9 141.1 111.0 138.5 111.0 137.6 C111.0 136.8 111.8 134.5 112.7 132.5 L114.4 129.0 L110.9 126.1 L107.5 123.2 L110.9 119.6 L114.4 116.0 L112.2 113.7 C110.5 111.9 110.0 110.2 110.0 105.6 L110.0 99.9 L102.6 92.7 C97.0 87.2 94.9 84.4 94.0 81.2 C93.4 78.8 92.1 76.2 91.2 75.4 C90.3 74.6 88.3 72.9 86.8 71.7 C83.4 68.9 82.4 65.1 84.5 62.5 L86.0 60.5 L88.4 63.2 C91.3 66.4 92.0 66.6 92.0 64.4 C92.0 61.2 93.9 64.2 94.5 68.4 C95.0 71.2 96.1 73.7 97.6 75.1 L100.0 77.3 L102.2 75.3 C103.5 74.2 105.3 73.0 106.2 72.7 C107.2 72.3 108.0 71.4 108.0 70.6 C108.0 69.8 109.6 68.2 111.6 67.0 C114.3 65.3 116.1 64.9 119.6 65.3 C125.8 66.0 127.3 67.5 126.6 72.2 C126.1 75.3 126.4 76.3 128.5 78.4 C131.8 81.7 131.8 86.0 128.3 90.0 C124.2 94.9 125.6 95.3 144.0 95.0 C148.7 94.9 153.6 94.7 155.0 94.5 C156.4 94.3 157.9 94.1 158.4 94.1 C158.8 94.0 158.9 92.5 158.5 90.8 C157.1 84.8 157.5 75.8 159.2 74.6 C160.0 74.0 161.0 72.3 161.4 70.8 C161.8 68.9 162.7 68.0 164.1 68.0 C165.2 68.0 165.8 67.5 165.5 67.0 C165.1 66.4 166.5 66.0 168.9 66.0 C172.1 66.0 173.3 66.5 174.6 68.5 C175.8 70.4 177.1 71.0 179.6 71.0 C182.4 71.0 183.2 71.5 184.1 73.8 C184.7 75.3 185.0 78.4 184.7 80.8 C184.2 85.9 185.1 86.1 189.5 81.8 C191.2 80.0 194.3 77.7 196.3 76.8 C199.2 75.4 200.2 74.2 201.3 70.4 C202.1 67.6 203.0 66.1 203.4 66.8 C204.6 68.7 205.7 68.2 206.4 65.5 C206.8 63.9 207.7 63.0 209.1 63.0 C213.5 63.0 212.7 69.7 207.7 74.2 C200.9 80.3 200.1 81.2 200.6 82.5 C201.1 83.8 189.2 96.0 180.1 103.6 C178.3 105.1 176.2 107.7 175.5 109.3 C174.8 110.9 172.5 113.2 170.4 114.4 L166.5 116.6 L165.8 122.5 C165.0 129.4 165.6 136.4 167.6 143.4 C168.6 147.1 168.7 149.8 167.9 155.4 C166.8 163.5 165.4 165.6 161.6 164.6 C158.7 163.9 158.3 161.6 160.5 158.6 C163.2 155.0 161.9 143.1 158.4 138.9 C157.6 138.1 157.0 136.8 157.0 136.1 C157.0 135.4 156.1 133.6 154.9 132.2 L152.8 129.5 L153.5 135.7 C153.9 139.1 153.9 144.8 153.5 148.4 L152.8 155.0 L148.2 154.9 C145.6 154.9 142.7 154.6 141.8 154.3 C138.7 153.5 139.8 152.0 143.5 152.0 C146.0 152.0 147.2 151.4 148.1 149.9 C149.4 147.3 149.1 144.4 145.5 131.1 L142.8 120.7 L144.4 117.2 C145.4 115.2 146.4 111.5 146.7 108.9 L147.3 104.1 L144.4 103.0 C140.6 101.5 136.4 102.1 136.9 104.0 C137.1 104.8 137.4 107.6 137.5 110.3 C137.7 112.9 138.1 117.7 138.5 120.9 L139.2 126.8 L135.7 129.2 C131.1 132.3 123.2 142.9 122.4 147.0 C121.6 150.7 122.9 152.0 127.2 152.0 C128.8 152.0 130.0 152.4 130.0 152.9 C130.0 154.9 127.2 155.8 122.2 155.3 L116.9 154.7 L117.6 148.6 L118.3 142.5 L116.7 143.9 C112.7 147.1 110.5 152.4 110.5 158.5 C110.5 163.8 110.3 164.5 108.4 164.8 C107.3 165.0 105.8 164.5 105.2 163.8 Z";
  var FONT = "Vazirmatn, 'Noto Sans Arabic', sans-serif";
  var W = 1920, H = 1080;

  /* ---------- helpers ---------- */
  function rng(seed) {
    var s = ((seed || 1) * 2654435761) >>> 0 || 7;
    return function () { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
  }
  function n1(v) { return Math.round(v * 10) / 10; }
  function pt(p) { return n1(p[0]) + ' ' + n1(p[1]); }
  function toward(p, q, d) { var dx = q[0] - p[0], dy = q[1] - p[1], l = Math.sqrt(dx * dx + dy * dy) || 1; return [p[0] + dx * d / l, p[1] + dy * d / l]; }

  /** Hand-drawn rounded rectangle path. (x,y) = top-left. Same seed => same wobble, so insets line up. */
  function blobPath(x, y, w, hh, r, seed, wob) {
    var R = rng(seed || 1); wob = wob == null ? 1 : wob;
    var j = wob * Math.min(6, Math.min(w, hh) * 0.02);
    var P = [[x, y], [x + w, y], [x + w, y + hh], [x, y + hh]].map(function (p) { return [p[0] + (R() - 0.5) * 2 * j, p[1] + (R() - 0.5) * 2 * j]; });
    var maxr = Math.min(w, hh) / 2 - 0.5;
    var rs = P.map(function () { return Math.max(1, Math.min(maxr, r * (1 + (R() - 0.5) * 0.3 * wob))); });
    var bul = P.map(function (p, i) { var q = P[(i + 1) % 4]; var len = Math.hypot(q[0] - p[0], q[1] - p[1]); return wob * (0.3 + R()) * Math.min(9, len * 0.012); });
    var A = [], B = [];
    for (var i = 0; i < 4; i++) { A[i] = toward(P[i], P[(i + 3) % 4], rs[i]); B[i] = toward(P[i], P[(i + 1) % 4], rs[i]); }
    var k = 0.58, d = 'M' + pt(B[0]);
    for (i = 0; i < 4; i++) {
      var s = B[i], nI = (i + 1) % 4, e = A[nI];
      var dx = e[0] - s[0], dy = e[1] - s[1], L = Math.hypot(dx, dy) || 1, nx = dy / L, ny = -dx / L, b = bul[i] * 1.33;
      d += 'C' + pt([s[0] + dx / 3 + nx * b, s[1] + dy / 3 + ny * b]) + ' ' + pt([s[0] + 2 * dx / 3 + nx * b, s[1] + 2 * dy / 3 + ny * b]) + ' ' + pt(e);
      var c = P[nI], bb = B[nI];
      d += 'C' + pt([e[0] + (c[0] - e[0]) * k, e[1] + (c[1] - e[1]) * k]) + ' ' + pt([bb[0] + (c[0] - bb[0]) * k, bb[1] + (c[1] - bb[1]) * k]) + ' ' + pt(bb);
    }
    return d + 'Z';
  }

  /** Visible-character width estimate for Vazirmatn (tashkeel has no width). */
  function textWidth(t, size) {
    var s = String(t || '').replace(/[\u064b-\u065f\u0670]/g, ''), words = s.split(' ').filter(Boolean);
    var L = words.join('').length, wide = (s.match(/[\u0633-\u0636]/g) || []).length;
    return (0.362 * L + 0.467 * words.length + 0.422 * wide) * size;
  }
  function lines(t) { return Array.isArray(t) ? t : String(t == null ? '' : t).split('\n'); }
  function rot(p, cx, cy) { return p.rotate ? 'rotate(' + p.rotate + ' ' + cx + ' ' + cy + ')' : undefined; }

  /* ---------- primitives ---------- */

  /** ArText — Arabic text block, centred on (x,y); align 'center' | 'right' (x = right edge). */
  function ArText(p) {
    var ls = lines(p.text), size = p.size || 48, lh = p.lineHeight || 1.3;
    var y0 = p.y - (ls.length - 1) * size * lh / 2;
    var anchor = p.align === 'right' ? 'start' : p.align === 'left' ? 'end' : 'middle';
    return h('g', { 'data-name': p.name || 'text' }, ls.map(function (t, i) {
      var kids = t;
      if (p.highlight && t.indexOf(p.highlight) >= 0) {
        var k = t.indexOf(p.highlight);
        kids = [t.slice(0, k), h('tspan', { key: 'hl', fill: p.highlightColor || C.highlight }, p.highlight), t.slice(k + p.highlight.length)];
      }
      return h('text', { key: i, x: p.x, y: n1(y0 + i * size * lh), fill: p.color || C['ink-body'], fontFamily: FONT, fontWeight: p.weight || 600, fontSize: size, textAnchor: anchor, dominantBaseline: 'central', direction: 'rtl' }, kids);
    }));
  }

  /** Sticker — the one shape behind every card, pill, chip and button. Centre (x,y). */
  function Sticker(p) {
    var w = p.w, hh = p.h, x = p.x - w / 2, y = p.y - hh / 2, r = p.r == null ? Math.min(w, hh) / 2 : p.r;
    var seed = p.seed || 1, wob = p.wob == null ? 1 : p.wob;
    var d = blobPath(x, y, w, hh, r, seed, wob);
    function inset(i) { return blobPath(x + i, y + i, w - 2 * i, hh - 2 * i, Math.max(4, r - i), seed, wob); }
    var els = [];
    if (p.shadow) els.push(h('path', { key: 'sh', d: d, fill: p.shadow, transform: 'translate(' + (p.shadowDx || 0) + ' ' + (p.shadowDy == null ? 14 : p.shadowDy) + ')' }));
    if (p.lip) els.push(h('path', { key: 'lip', d: d, fill: p.lipColor || p.stroke, stroke: p.lipColor || p.stroke || 'none', strokeWidth: p.strokeWidth || 0, transform: 'translate(' + (p.lipDx || 0) + ' ' + p.lip + ')' }));
    els.push(h('path', { key: 'body', d: d, fill: p.fill || 'none', stroke: p.stroke || 'none', strokeWidth: p.strokeWidth || 0, strokeLinejoin: 'round' }));
    if (p.innerFill) els.push(h('path', { key: 'in', d: inset(p.innerInset || 20), fill: p.innerFill }));
    if (p.ring) els.push(h('path', { key: 'ring', d: inset(p.ringInset || 12), fill: 'none', stroke: p.ring, strokeWidth: p.ringWidth || 6 }));
    if (p.dash) els.push(h('path', { key: 'dash', d: p.dashInset ? inset(p.dashInset) : d, fill: 'none', stroke: p.dash, strokeWidth: p.dashWidth || 6, strokeDasharray: p.dashArray || '24 10', strokeLinecap: 'round' }));
    return h('g', { 'data-name': p.name || 'sticker', transform: rot(p, p.x, p.y) }, els, p.children);
  }

  /** Icon — a traced vector glyph from the frames. */
  function Icon(p) {
    var ic = ICONS[p.name]; if (!ic) return null;
    var size = p.size || 100, s = size / Math.max(ic.w, ic.h);
    var tx = p.x - ic.w * s / 2, ty = p.y - ic.h * s / 2;
    return h('g', { 'data-name': 'icon-' + p.name, transform: 'translate(' + n1(tx) + ' ' + n1(ty) + ') scale(' + s.toFixed(4) + ')' },
      ic.layers.map(function (l, i) { return h('path', { key: i, d: l.d, fill: p.color || l.fill, fillRule: 'evenodd' }); }));
  }

  /* ---------- canvas ---------- */

  function Background(p) {
    return h('g', { 'data-name': 'background' },
      h('rect', { width: W, height: H, fill: C.canvas }),
      p.decor === false ? null : h('path', { d: DECOR_D, fill: C['canvas-decor'], fillRule: 'evenodd' }));
  }

  function LogoBadge(p) {
    if (p.show === false) return null;
    return h('g', { 'data-name': 'logo-badge' },
      h('circle', { cx: 141, cy: 105, r: 89, fill: C['canvas-decor'] }),
      p.href ? h('image', { href: p.href, x: 71, y: 35, width: 140, height: 140, preserveAspectRatio: 'xMidYMid meet' })
        : h('path', { d: LOGO_D, fill: p.ink || C['logo-ink'], fillRule: 'evenodd' }));
  }

  function LessonChip(p) {
    if (!p.text) return null;
    var w = p.w || Math.max(220, textWidth(p.text, 52) * 1.05 + 56), cx = W - 37 - w / 2;
    return h('g', { 'data-name': 'lesson-chip' },
      h(Sticker, { x: cx, y: 74, w: w, h: 84, r: 42, wob: 0.6, seed: 3, fill: C['sky-500'], shadow: C['shadow-soft'], shadowDy: 12, ring: C['sky-300'], ringInset: 7, ringWidth: 4, dash: C['sky-dash'], dashInset: -5, dashWidth: 6, dashArray: '34 22' }),
      h(ArText, { x: cx, y: 70, text: p.text, size: 52, color: C.white }));
  }

  /** Scene — the 1920×1080 frame every template sits in. */
  function Scene(p) {
    return h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1920 1080', width: p.width || '100%', height: p.height, style: p.style, role: 'img', 'aria-label': p.label || 'lesson frame' },
      h(Background, { decor: p.decor }),
      h(LogoBadge, { show: p.logo !== false, href: p.logoHref }),
      p.chip ? h(LessonChip, { text: p.chip }) : null,
      p.children);
  }

  /* ---------- titles ---------- */

  function TitleCard(p) {
    var x = p.x || 939, y = p.y || 531, mark = p.mark !== false;
    return h('g', { 'data-name': 'title-card' },
      h(Sticker, { x: x, y: y, w: 800, h: 266, r: 120, wob: 0.8, seed: 11, fill: C['sky-500'], shadow: C['shadow-soft'], shadowDx: -6, shadowDy: 20, ring: C['sky-300'], ringInset: 14, ringWidth: 6, dash: C['sky-dash'], dashWidth: 7, dashArray: '23 9' }),
      h(ArText, { x: mark ? x - 73 : x, y: y - 3, text: p.title || 'العنوان الرئيسي', size: 78, lineHeight: 1.13, color: C.white }),
      mark ? h('g', { 'data-name': 'title-mark' },
        h(Icon, { name: 'letters-abt', x: x + 345, y: y + 46, size: 250, color: C['shadow-soft'] }),
        h(Icon, { name: 'letters-abt', x: x + 333, y: y + 34, size: 250 })) : null);
  }

  function SectionTitle(p) {
    var text = p.text || 'العنوان الرئيسي', y = p.y || 110, w = p.w || Math.max(634, textWidth(text, 60) + 130);
    return h('g', { 'data-name': 'section-title' },
      h(Sticker, { x: p.x || 960, y: y, w: w, h: 134, r: 62, wob: 0.5, seed: 5, fill: C['title-500'], stroke: C['title-700'], strokeWidth: 3, lip: 12, lipColor: C['title-700'] }),
      h(ArText, { x: p.x || 960, y: y - 3, text: text, size: 60, color: C.white }));
  }

  /* ---------- objectives ---------- */

  function TargetIcon(p) {
    var x = p.x, y = p.y, s = (p.size || 120) / 120, n = C['target-navy'];
    function S(v) { return v * s; }
    return h('g', { 'data-name': 'icon-target', transform: 'translate(' + x + ' ' + y + ')' },
      h('ellipse', { cx: 0, cy: S(58), rx: S(48), ry: S(6), fill: C['target-glow'] }),
      h('path', { d: 'M' + S(-30) + ' ' + S(30) + 'L' + S(-34) + ' ' + S(58) + 'L' + S(-22) + ' ' + S(58) + 'L' + S(-14) + ' ' + S(36) + 'Z M' + S(30) + ' ' + S(30) + 'L' + S(34) + ' ' + S(58) + 'L' + S(22) + ' ' + S(58) + 'L' + S(14) + ' ' + S(36) + 'Z', fill: n }),
      h('circle', { cx: S(-5), cy: S(-2), r: S(46), fill: C['target-side'], stroke: n, strokeWidth: S(2.5) }),
      h('circle', { cx: 0, cy: S(-2), r: S(46), fill: C['target-coral'], stroke: n, strokeWidth: S(2.5) }),
      h('circle', { cx: 0, cy: S(-2), r: S(34), fill: C.white, stroke: n, strokeWidth: S(2) }),
      h('circle', { cx: 0, cy: S(-2), r: S(24), fill: C['target-coral'], stroke: n, strokeWidth: S(2) }),
      h('circle', { cx: 0, cy: S(-2), r: S(13), fill: C.white, stroke: n, strokeWidth: S(2) }),
      h('path', { d: 'M' + S(2) + ' ' + S(-4) + 'L' + S(44) + ' ' + S(-22), stroke: n, strokeWidth: S(3), strokeLinecap: 'round' }),
      h('path', { d: 'M' + S(0) + ' ' + S(-2) + 'L' + S(22) + ' ' + S(-22) + 'L' + S(14) + ' ' + S(-8) + 'L' + S(24) + ' ' + S(6) + 'Z', fill: n }));
  }

  function ObjectivesCard(p) {
    var items = p.items || ['تَتَعَرَّفُ الْقِصَّةَ الْمُصَوَّرَةَ.', 'تَتَعَرَّفُ عَنَاصِرَ الْقِصَّةِ الْمُصَوَّرَةِ.'];
    var lead = p.lead || 'فِي نِهَايَةِ هَذَا الدَّرْسِ\nسَتَكُونُ قَادِرًا عَلَى أَنْ:';
    return h('g', { 'data-name': 'objectives-card' },
      h(Sticker, { x: 933, y: 604, w: 672, h: 729, r: 100, wob: 0.7, seed: 21, fill: C['lilac-300'], stroke: C['lilac-600'], strokeWidth: 4, lip: 28, lipColor: C['lilac-600'] }),
      h(Sticker, { x: 927, y: 685, w: 619, h: 483, r: 40, wob: 0.5, seed: 22, fill: C['lilac-50'], stroke: C['lilac-600'], strokeWidth: 6 }),
      h(Sticker, { x: 985, y: 347, w: 411, h: 115, r: 57, wob: 0.5, seed: 23, fill: C['lilac-100'], stroke: C['lilac-600'], strokeWidth: 4, lip: 12, lipColor: C['lilac-600'] }),
      h(ArText, { x: 1003, y: 343, text: p.title || 'الأهداف', size: 60, weight: 700, color: C['ink-body'] }),
      h('circle', { cx: 1249, cy: 347, r: 77, fill: C['lilac-100'], stroke: C['lilac-600'], strokeWidth: 4 }),
      h(TargetIcon, { x: 1249, y: 342, size: 118 }),
      h(ArText, { x: 927, y: 566, text: lead, size: 50, lineHeight: 1.7, weight: 700, color: C['ink-heading'] }),
      h(ArText, { x: 1195, y: 765, text: items, size: 45, lineHeight: 2, weight: 600, align: 'right', color: C['ink-body'] }));
  }

  /* ---------- pictures & story ---------- */

  var TONES = {
    blue: { fill: C['sky-500'], lip: C['sky-700'], hi: C['sky-100'] },
    green: { fill: C['green-500'], lip: C['green-700'], hi: C['green-100'] },
    gold: { fill: C['gold-500'], lip: C['gold-700'], hi: C['gold-100'] }
  };

  function ImageFrame(p) {
    var t = TONES[p.tone || 'blue'], w = p.w || 497, hh = p.h || 386, x = p.x, y = p.y, b = p.border || Math.round(Math.min(w, hh) * 0.05);
    var id = 'kgclip' + React.useId().replace(/[^a-zA-Z0-9]/g, '');
    var ix = x - w / 2 + b, iy = y - hh / 2 + b, iw = w - 2 * b, ih = hh - 2 * b;
    var inner = blobPath(ix, iy, iw, ih, 12, (p.seed || 31) + 1, 0.4);
    var art = p.href ? h('image', { href: p.href, x: ix, y: iy, width: iw, height: ih, preserveAspectRatio: 'xMidYMid slice' })
      : h('g', { 'data-name': 'placeholder-art' },
        h('rect', { x: ix, y: iy, width: iw, height: ih, fill: '#dff4fb' }),
        h('circle', { cx: ix + iw * 0.78, cy: iy + ih * 0.28, r: ih * 0.12, fill: C['sun-400'] }),
        h('path', { d: 'M' + ix + ' ' + (iy + ih * 0.78) + 'Q' + (ix + iw * 0.3) + ' ' + (iy + ih * 0.5) + ' ' + (ix + iw * 0.62) + ' ' + (iy + ih * 0.74) + 'T' + (ix + iw) + ' ' + (iy + ih * 0.66) + 'V' + (iy + ih) + 'H' + ix + 'Z', fill: C['green-500'] }),
        h('path', { d: 'M' + ix + ' ' + (iy + ih * 0.9) + 'Q' + (ix + iw * 0.5) + ' ' + (iy + ih * 0.72) + ' ' + (ix + iw) + ' ' + (iy + ih * 0.88) + 'V' + (iy + ih) + 'H' + ix + 'Z', fill: C['green-700'] }));
    return h('g', { 'data-name': 'image-frame-' + (p.tone || 'blue'), transform: 'rotate(' + (p.rotate == null ? -1.2 : p.rotate) + ' ' + x + ' ' + y + ')' },
      h(Sticker, { x: x, y: y, w: w, h: hh, r: 26, wob: 0.6, seed: p.seed || 31, fill: t.fill, shadow: C['shadow-cool'], shadowDx: 10, shadowDy: 14, lip: 10, lipDx: 6, lipColor: t.lip, ring: t.hi, ringInset: 5, ringWidth: 5 }),
      h('defs', null, h('clipPath', { id: id }, h('path', { d: inner }))),
      h('g', { clipPath: 'url(#' + id + ')' }, art));
  }

  function StoryCard(p) {
    var text = p.text || ['تَتَعَرَّفُ الْقِصَّةَ الْمُصَوَّرَةَ.', 'تَتَعَرَّفُ عَنَاصِرَ الْقِصَّةِ الْمُصَوَّرَةِ.', 'تَتَعَرَّفُ الْقِصَّةَ الْمُصَوَّرَةَ.', 'تَتَعَرَّفُ عَنَاصِرَ الْقِصَّةِ الْمُصَوَّرَةِ.', 'تَتَعَرَّفُ الْقِصَّةَ الْمُصَوَّرَةَ.', 'تَتَعَرَّفُ عَنَاصِرَ الْقِصَّةِ الْمُصَوَّرَةِ.'];
    return h('g', { 'data-name': 'story-card' },
      h(Sticker, { x: 942, y: 660, w: 1400, h: 590, r: 70, wob: 0.6, seed: 41, fill: C.white, stroke: C['story-rim'], strokeWidth: 8, lip: 10, lipDx: -8, lipColor: C['story-edge'], dash: C['story-dash'], dashInset: 13, dashWidth: 9, dashArray: '48 30' }),
      h(Sticker, { x: 1477, y: 365, w: 350, h: 128, r: 60, wob: 0.6, seed: 42, fill: C.white, lip: 12, lipDx: 4, lipColor: C['sky-dash'], dash: C['sky-dash'], dashWidth: 7, dashArray: '34 22' }),
      p.tab ? h(ArText, { x: 1477, y: 362, text: p.tab, size: 48, weight: 700, color: C['sky-dash'] }) : null,
      h(ImageFrame, { x: 565, y: 662, w: 497, h: 386, tone: 'blue', href: p.href, seed: 43 }),
      h(ArText, { x: 1589, y: 660, text: text, size: 45, lineHeight: 1.33, align: 'right', color: C['ink-story'] }));
  }

  /* ---------- word & letter ---------- */

  function CategoryPill(p) {
    var text = p.text || 'لِلْبَعِيدِ', x = p.x || 955, y = p.y || 280, w = p.w || Math.max(430, textWidth(text, 48) + 140);
    return h('g', { 'data-name': 'category-pill' },
      h(Sticker, { x: x, y: y, w: w, h: 132, r: 66, wob: 1.3, seed: 51, fill: C['pink-500'], lip: 12, lipDx: -4, lipColor: C['pink-700'], ring: C['gold-ring'], ringInset: 12, ringWidth: 8 }),
      h(ArText, { x: x, y: y - 2, text: text, size: 48, weight: 700, color: C.white }));
  }

  function WordPill(p) {
    return h('g', { 'data-name': 'word-pill' },
      h(Sticker, { x: p.x, y: p.y, w: p.w || 247, h: 87, r: 43, wob: 0.4, seed: p.seed || 61, fill: C['lilac-300'], stroke: C['lilac-600'], strokeWidth: 3 }),
      h(ArText, { x: p.x, y: p.y - 2, text: p.text, size: 48, weight: 700, color: C.white }));
  }

  function AnswerChip(p) {
    return h('g', { 'data-name': 'answer-chip' },
      h(Sticker, { x: p.x, y: p.y, w: p.w || 254, h: 104, r: 26, wob: 0.6, seed: p.seed || 71, fill: C.white, stroke: C['sky-200'], strokeWidth: 12, dash: C['sky-dash'], dashInset: 8, dashWidth: 5, dashArray: '20 9' }),
      h(ArText, { x: p.x, y: p.y - 2, text: p.text, size: 45, weight: 700, color: C['sky-dash'] }));
  }

  function LetterCard(p) {
    var x = p.x || 929, y = p.y || 621;
    return h('g', { 'data-name': 'letter-card' },
      h(Sticker, { x: x, y: y, w: 962, h: 695, r: 170, wob: 2.6, seed: 81, fill: C.paper, stroke: C['letter-rim'], strokeWidth: 20, dash: C['letter-dash'], dashInset: 17, dashWidth: 5, dashArray: '26 12' }),
      h(ArText, { x: x - 8, y: y - 30, text: p.letter || 'ش', size: 570, lineHeight: 1, weight: 700, color: C['pink-500'], name: 'letter' }));
  }

  /* ---------- concept flow ---------- */

  function FlowBox(p) {
    if (p.variant === 'dashed') {
      return h('g', { 'data-name': 'flow-box-dashed' },
        h(Sticker, { x: p.x || 966, y: p.y || 900, w: p.w || 1125, h: p.h || 165, r: 70, wob: 0.7, seed: 92, fill: C.white, dash: C['aqua-500'], dashWidth: 6, dashArray: '40 22' }),
        h(ArText, { x: p.x || 966, y: (p.y || 900) - 2, text: p.text, size: 45, color: C['aqua-500'] }));
    }
    return h('g', { 'data-name': 'flow-box' },
      h(Sticker, { x: p.x || 968, y: p.y || 650, w: p.w || 1265, h: p.h || 248, r: 110, wob: 0.6, seed: 91, fill: C.white, stroke: C['sky-500'], strokeWidth: 8, lip: 16, lipColor: C['sky-500'] }),
      h(ArText, { x: p.x || 968, y: (p.y || 650) - 4, text: p.text, size: 55, weight: 700, color: C['sky-dash'] }));
  }

  function Arrow(p) {
    var x = p.x, y = p.y;
    if (p.kind === 'curve') return h(Icon, { name: 'arrow-curve', x: x, y: y, size: p.size || 300, color: p.color });
    var L = p.size || 130, s = L / 130;
    var d = 'M-10 10Q0 -6 10 10L9 ' + (130 - 52) + 'Q22 ' + (130 - 62) + ' 32 ' + (130 - 54) + 'Q40 ' + (130 - 46) + ' 30 ' + (130 - 36) + 'L5 128Q0 133 -5 128L-30 ' + (130 - 36) + 'Q-40 ' + (130 - 46) + ' -32 ' + (130 - 54) + 'Q-22 ' + (130 - 62) + ' -9 ' + (130 - 52) + 'Z';
    return h('g', { 'data-name': 'arrow-down', transform: 'translate(' + x + ' ' + (y - L / 2) + ') scale(' + s + ')' },
      h('path', { d: d, fill: C['teal-500'], stroke: C['teal-700'], strokeWidth: 3, strokeLinejoin: 'round' }),
      h('path', { d: 'M-3 12L-2 ' + (130 - 58) + 'M-24 ' + (130 - 46) + 'L-6 ' + (130 - 18), stroke: C['teal-300'], strokeWidth: 5, strokeLinecap: 'round', fill: 'none' }));
  }

  /* ---------- questions ---------- */

  function QuestionPanel(p) {
    var x = p.x || 961, y = p.y || 653, w = p.w || 1390, hh = p.h || 530;
    return h('g', { 'data-name': 'question-panel' },
      h(Sticker, { x: x, y: y, w: w, h: hh, r: 70, wob: 0.6, seed: p.seed || 101, fill: C['aqua-50'], stroke: C['aqua-500'], strokeWidth: 3, lip: 16, lipColor: C['aqua-500'], innerFill: C.white, innerInset: 20, dash: C['aqua-500'], dashInset: 22, dashWidth: 5, dashArray: '30 16' }),
      p.question ? h(ArText, { x: p.questionX || x, y: p.questionY || (y - hh / 2 + 123), text: p.question, size: p.questionSize || 56, lineHeight: 1.6, color: C['ink-question'] }) : null,
      p.children);
  }

  var STATES = {
    idle: { fill: C['answer-200'], stroke: C['answer-400'] },
    correct: { fill: C['success-300'], stroke: C['green-700'] },
    wrong: { fill: C['error-300'], stroke: C['error-500'] }
  };

  function AnswerButton(p) {
    var st = STATES[p.state || 'idle'];
    return h('g', { 'data-name': 'answer-button' + (p.state && p.state !== 'idle' ? '-' + p.state : '') },
      h(Sticker, { x: p.x, y: p.y, w: p.w || 364, h: p.h || 153, r: 50, wob: 0.8, seed: p.seed || 111, fill: st.fill, stroke: st.stroke, strokeWidth: 3, shadow: C['shadow-mid'], shadowDy: 10 }),
      h(ArText, { x: p.x, y: p.y - 2, text: p.text || 'إِجَابَةٌ', size: 48, weight: 700, color: p.state === 'idle' || !p.state ? C['ink-answer'] : C['ink-feedback'] }));
  }

  function TrueFalseButton(p) {
    var w = p.w || 253, hh = p.h || 166, st = p.state ? STATES[p.state] : null;
    return h('g', { 'data-name': 'tf-' + (p.value === 'false' ? 'false' : 'true') },
      h(Sticker, { x: p.x, y: p.y, w: w, h: hh, r: 26, wob: 0.6, seed: p.seed || 121, fill: st ? st.fill : C['lilac-100'], stroke: st ? st.stroke : C['lilac-600'], strokeWidth: 3, shadow: C['shadow-mid'], shadowDy: 10 }),
      h(Icon, { name: p.value === 'false' ? 'tf-cross' : 'tf-check', x: p.x, y: p.y, size: hh * 0.72, color: C['lilac-600'] }));
  }

  /* ---------- feedback ---------- */

  function RoundButton(p) {
    var s = p.size || 142;
    return h('g', { 'data-name': 'button-' + (p.icon || 'next') },
      h(Sticker, { x: p.x, y: p.y, w: s, h: s * 0.93, r: s * 0.38, wob: 0.5, seed: p.icon === 'replay' ? 131 : 132, fill: C['button-300'], stroke: C['button-700'], strokeWidth: 6, shadow: C['shadow-deep'], shadowDy: 14 }),
      h(Icon, { name: p.icon === 'replay' ? 'icon-replay' : 'icon-next', x: p.x, y: p.y, size: s * 0.66, color: C.white }));
  }

  function FeedbackCard(p) {
    var ok = p.kind !== 'wrong';
    var text = p.text || (ok ? 'مُمْتَازٌ\nإِجَابَتُكَ صَحِيحَةٌ، فالنِّهَايَةُ هِيَ\nوَصْفٌ لِلْحَدَثِ الَّذِي انْتَهَتْ بِهِ الْقِصَّةُ.' : 'إِجَابَةٌ غَيْرُ صَحِيحَةٍ\nشَاهِدْ جُزْءَ الشَّرْحِ مَرَّةً أُخْرَى\nثُمَّ جَرِّبْ مِنْ جَدِيدٍ.');
    return h('g', { 'data-name': 'feedback-' + (ok ? 'correct' : 'wrong') },
      h(QuestionPanel, { x: 961, y: 530, w: 1228, h: 773, seed: 141 }),
      h(Sticker, { x: 951, y: 168, w: 264, h: 168, r: 44, wob: 0.5, seed: 142, fill: ok ? C['success-300'] : C['error-300'], lip: 10, lipColor: ok ? C['success-500'] : C['error-500'] }),
      h(Icon, { name: ok ? 'badge-check' : 'badge-cross', x: 951, y: 166, size: 138, color: C.white }),
      h(ArText, { x: 960, y: 520, text: text, size: 60, lineHeight: 1.65, weight: 700, color: C['ink-feedback'] }),
      ok ? [h(RoundButton, { key: 'r', icon: 'replay', x: 865, y: 908 }), h(RoundButton, { key: 'n', icon: 'next', x: 1066, y: 908 })]
        : h(RoundButton, { icon: 'replay', x: 960, y: 908 }));
  }

  function SentenceStrip(p) {
    var text = p.text || 'يَغْسِلُ عُمَرُ أَسْنَانَهُ قَبْلَ النَّوْمِ.', x = p.x || 998, y = p.y || 928, w = p.w || Math.max(600, textWidth(text, 64) + 190);
    return h('g', { 'data-name': 'sentence-strip' },
      h(Sticker, { x: x, y: y, w: w, h: 150, r: 34, wob: 0.6, seed: 151, fill: C.white, stroke: C['sky-200'], strokeWidth: 14, dash: C['sky-dash'], dashInset: 10, dashWidth: 6, dashArray: '24 12' }),
      h(ArText, { x: x, y: y - 3, text: text, highlight: p.highlight == null ? 'قَبْلَ' : p.highlight, size: 64, weight: 700, color: C['sky-dash'] }));
  }

  /* ---------- templates: the 15 lesson frames ---------- */

  var IMG = function (d, i) { return d.images ? d.images[i] : d.image; };
  var Q = 'سُؤَالٌ سُؤَالٌ سُؤَالٌ سُؤَالٌ سُؤَالٌ سُؤَالٌ';
  var templates = {
    title: function (d) { return h(TitleCard, { title: d.title || 'العنوان الرئيسي\nالعنوان الرئيسي', mark: d.mark }); },
    objectives: function (d) { return h(ObjectivesCard, { lead: d.lead, items: d.items }); },
    story: function (d) { return [h(SectionTitle, { key: 's', text: d.heading }), h(StoryCard, { key: 'c', text: d.text, href: d.image, tab: d.tab })]; },
    demonstratives: function (d) {
      var items = d.items || [{ word: 'تِلْكَ', answer: 'أُولَئِكَ' }, { word: 'تِلْكَ', answer: 'أُولَئِكَ' }, { word: 'تِلْكَ', answer: 'أُولَئِكَ' }];
      var xs = [1534, 936, 338];
      return [h(SectionTitle, { key: 's', text: d.heading || 'السُّلَحْفَاةُ وَالأَرْنَبُ الْمَغْرُورُ' }), h(CategoryPill, { key: 'p', text: d.category })]
        .concat(items.slice(0, 3).map(function (it, i) {
          return h('g', { key: i, 'data-name': 'column-' + (i + 1) },
            h(WordPill, { x: xs[i], y: 440, text: it.word, seed: 61 + i }),
            h(ImageFrame, { x: xs[i] - 12, y: 667, w: 395, h: 326, href: it.image, seed: 160 + i, rotate: [-1.5, -0.6, -1][i] }),
            h(AnswerChip, { x: xs[i] + 28, y: 980, text: it.answer, seed: 71 + i }));
        }));
    },
    letter: function (d) { return [h(SectionTitle, { key: 's', text: d.heading }), h(LetterCard, { key: 'l', letter: d.letter })]; },
    concept: function (d) {
      return [h(SectionTitle, { key: 's', text: d.heading }), h(Arrow, { key: 'a', x: 938, y: 268, size: 130 }), h(CategoryPill, { key: 'p', x: 941, y: 420, text: d.category }),
        h(FlowBox, { key: 'b', text: d.main || 'السُّلَحْفَاةُ وَالأَرْنَبُ الْمَغْرُورُ' }), h(Arrow, { key: 'c', kind: 'curve', x: 1650, y: 770, size: 300 }),
        h(FlowBox, { key: 'd', variant: 'dashed', text: d.detail || 'تَتَعَرَّفُ الْقِصَّةَ الْمُصَوَّرَةَ.' })];
    },
    trueFalse: function (d) {
      return [h(SectionTitle, { key: 's', y: 227, text: d.heading || 'نوع السؤال' }), h(QuestionPanel, { key: 'q', question: d.question || Q, questionY: 503 },
        h(TrueFalseButton, { value: 'true', x: 1215, y: 731, state: d.reveal === 'true' ? 'correct' : null }), h(TrueFalseButton, { value: 'false', x: 705, y: 731, seed: 122, state: d.reveal === 'false' ? 'correct' : null }))];
    },
    trueFalseImage: function (d) {
      return [h(SectionTitle, { key: 's', y: 227, text: d.heading || 'نوع السؤال' }), h(QuestionPanel, { key: 'q', question: d.question || 'سُؤَالٌ سُؤَالٌ سُؤَالٌ\nسُؤَالٌ سُؤَالٌ سُؤَالٌ', questionX: 1258, questionY: 548, questionSize: 52 },
        h(ImageFrame, { x: 584, y: 622, w: 520, h: 312, tone: 'green', href: IMG(d, 0), seed: 171 }),
        h(TrueFalseButton, { value: 'true', x: 1378, y: 745, w: 209, h: 138 }), h(TrueFalseButton, { value: 'false', x: 1140, y: 744, w: 209, h: 138, seed: 122 }))];
    },
    mcq2: function (d) {
      var a = d.answers || ['إِجَابَةٌ', 'إِجَابَةٌ'];
      return [h(SectionTitle, { key: 's', y: 227, text: d.heading || 'نوع السؤال' }), h(QuestionPanel, { key: 'q', question: d.question || Q, questionY: 530 },
        h(AnswerButton, { x: 1226, y: 722, text: a[0], state: d.correct === 0 ? 'correct' : null }), h(AnswerButton, { x: 695, y: 722, text: a[1], seed: 112, state: d.correct === 1 ? 'correct' : null }))];
    },
    mcq3: function (d) {
      var a = d.answers || ['إِجَابَةٌ', 'إِجَابَةٌ', 'إِجَابَةٌ'], xs = [1409, 960, 512];
      return [h(SectionTitle, { key: 's', y: 227, text: d.heading || 'نوع السؤال' }), h(QuestionPanel, { key: 'q', question: d.question || Q, questionY: 530 },
        a.slice(0, 3).map(function (t, i) { return h(AnswerButton, { key: i, x: xs[i], y: 722, text: t, seed: 111 + i, state: d.correct === i ? 'correct' : null }); }))];
    },
    pictureChoice: function (d) {
      var xs = [1403, 960, 518];
      return [h(SectionTitle, { key: 's', y: 227, text: d.heading || 'نوع السؤال' }), h(QuestionPanel, { key: 'q', y: 670, h: 565, question: d.question || Q, questionY: 492 },
        xs.map(function (x, i) { return h(ImageFrame, { key: i, x: x, y: 737, w: 391, h: 306, tone: 'gold', href: IMG(d, i), seed: 181 + i, rotate: -0.8 }); }))];
    },
    mcq4Image: function (d) {
      var a = d.answers || ['إِجَابَةٌ', 'إِجَابَةٌ', 'إِجَابَةٌ', 'إِجَابَةٌ'], P = [[1417, 697], [1000, 697], [1417, 851], [1000, 851]];
      return [h(SectionTitle, { key: 's', y: 227, text: d.heading || 'نوع السؤال' }), h(QuestionPanel, { key: 'q', y: 670, h: 565, question: d.question || 'سُؤَالٌ سُؤَالٌ سُؤَالٌ سُؤَالٌ سُؤَالٌ\nسُؤَالٌ سُؤَالٌ سُؤَالٌ سُؤَالٌ سُؤَالٌ', questionX: 1205, questionY: 522, questionSize: 50 },
        h(ImageFrame, { x: 518, y: 680, w: 391, h: 306, tone: 'green', href: IMG(d, 0), seed: 191 }),
        a.slice(0, 4).map(function (t, i) { return h(AnswerButton, { key: i, x: P[i][0], y: P[i][1], w: 336, h: 114, text: t, seed: 111 + i, state: d.correct === i ? 'correct' : null }); }))];
    },
    feedbackCorrect: function (d) { return h(FeedbackCard, { kind: 'correct', text: d.text }); },
    feedbackWrong: function (d) { return h(FeedbackCard, { kind: 'wrong', text: d.text }); },
    pictureSentence: function (d) { return [h(ImageFrame, { key: 'i', x: 960, y: 452, w: 940, h: 672, href: d.image, seed: 201, rotate: -1 }), h(SentenceStrip, { key: 's', text: d.sentence, highlight: d.highlight })]; }
  };
  var TEMPLATE_LIST = Object.keys(templates);

  /** LessonFrame — one complete 1920×1080 frame from a template name + data. */
  function LessonFrame(p) {
    var t = templates[p.template] || templates.title, d = p.data || {};
    var chip = p.template === 'title' ? null : (p.chip == null ? 'العنوان الرئيسي' : p.chip);
    return h(Scene, { chip: chip, logo: p.logo, logoHref: p.logoHref, decor: p.decor, width: p.width, height: p.height, style: p.style, label: p.template }, t(d));
  }

  /** Stage — wraps loose components in a Scene for previews. */
  function Stage(p) { return h(Scene, { chip: p.chip, logo: p.logo, width: p.width, style: p.style }, p.children); }

  var motion = { fps: 25, pop: 500, move: 700, exit: 300, stagger: 200, celebrate: 800, shake: 400, hold: 2000, float: 3000,
    easePop: 'cubic-bezier(0.34, 1.56, 0.64, 1)', easeSoft: 'cubic-bezier(0.45, 0, 0.55, 1)', easeOut: 'cubic-bezier(0.22, 1, 0.36, 1)' };

  window.SelahKG = Object.assign(window.SelahKG || {}, {
    Scene: Scene, Background: Background, LogoBadge: LogoBadge, LessonChip: LessonChip, Stage: Stage,
    Sticker: Sticker, ArText: ArText, Icon: Icon, TargetIcon: TargetIcon,
    TitleCard: TitleCard, SectionTitle: SectionTitle, ObjectivesCard: ObjectivesCard,
    ImageFrame: ImageFrame, StoryCard: StoryCard, CategoryPill: CategoryPill, WordPill: WordPill, AnswerChip: AnswerChip,
    LetterCard: LetterCard, FlowBox: FlowBox, Arrow: Arrow,
    QuestionPanel: QuestionPanel, AnswerButton: AnswerButton, TrueFalseButton: TrueFalseButton,
    RoundButton: RoundButton, FeedbackCard: FeedbackCard, SentenceStrip: SentenceStrip,
    LessonFrame: LessonFrame, templates: templates, templateNames: TEMPLATE_LIST,
    colors: C, motion: motion, blobPath: blobPath, textWidth: textWidth
  });
})();
