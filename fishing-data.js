// 钓鱼决策数据库
const fishingDatabase = {
    // 鱼种数据
    fishTypes: {
        crucian: { name: '鲫鱼', characteristics: '胆小、警惕性高、摄食谨慎', fighting: '轻微' },
        carp: { name: '鲤鱼', characteristics: '狡猾、警惕性高、力大', fighting: '强劲' },
        grass: { name: '草鱼', characteristics: '活跃、喜草、力大', fighting: '强劲' },
        black: { name: '青鱼', characteristics: '狡猾、力大无比、喜螺', fighting: '极强' },
        bream: { name: '鳊鱼', characteristics: '活跃、喜群、力中', fighting: '中等' },
        catfish: { name: '鲶鱼', characteristics: '凶猛、夜行、力大', fighting: '强劲' },
        snakehead: { name: '黑鱼', characteristics: '凶猛、护巢、力强', fighting: '强劲' },
        tilapia: { name: '罗非鱼', characteristics: '适应力强、喜温', fighting: '中等' },
        whitefish: { name: '白鱼', characteristics: '活跃、喜上层、力小', fighting: '轻微' },
        silvercarp: { name: '鲢鱼', characteristics: '上层、活跃、受惊跳', fighting: '中等' },
        bighead: { name: '鳙鱼', characteristics: '中上层、温顺、力中', fighting: '中等' },
        giantcatfish: { name: '巨型鲶鱼', characteristics: '极度狡猾、力极大', fighting: '极强' },
        sturgeon: { name: '鲟鱼', characteristics: '古老、力大、滑口', fighting: '极强' },
        mandarinfish: { name: '鳜鱼', characteristics: '凶猛、肉食、力强', fighting: '强劲' },
        bass: { name: '加州鲈鱼', characteristics: '凶猛、活跃、力强', fighting: '强劲' }
    },

    // 线组配置数据库
    lineConfigs: {
        small: {
            mainline: [0.4, 0.5, 0.6, 0.8],
            subline: [0.2, 0.3, 0.4],
            hookSizes: ['袖钩2#', '袖钩3#', '金袖2#', '伊豆2#'],
            floatLead: ['0.8-1.0g', '1.0-1.2g', '1.2-1.5g']
        },
        medium_small: {
            mainline: [0.8, 1.0, 1.2],
            subline: [0.4, 0.6, 0.8],
            hookSizes: ['袖钩3#', '袖钩4#', '金袖3#', '伊豆3#'],
            floatLead: ['1.2-1.5g', '1.5-2.0g', '2.0-2.5g']
        },
        medium: {
            mainline: [1.5, 2.0],
            subline: [1.0, 1.2],
            hookSizes: ['伊豆4#', '伊豆5#', '新关东3#', '千又2#'],
            floatLead: ['2.0-2.5g', '2.5-3.0g', '3.0-3.5g']
        },
        medium_large: {
            mainline: [2.5, 3.0, 3.5],
            subline: [1.5, 2.0, 2.5],
            hookSizes: ['伊豆6#', '伊豆7#', '新关东4#', '新关东5#'],
            floatLead: ['3.0-4.0g', '4.0-5.0g', '5.0-6.0g']
        },
        large: {
            mainline: [4.0, 5.0],
            subline: [3.0, 4.0],
            hookSizes: ['新关东6#', '新关东7#', '千又5#', '千又6#'],
            floatLead: ['5.0-6.0g', '6.0-8.0g', '8.0-10g']
        },
        giant: {
            mainline: [6.0, 8.0, 10.0],
            subline: [4.0, 5.0, 6.0],
            hookSizes: ['千又7#', '千又8#', '巨物钩1#', '巨物钩2#'],
            floatLead: ['8.0-12g', '12-15g', '15-20g']
        }
    },

    // 饵料配方数据库
    baitFormulas: {
        spring: {
            crucian: {
                primary: '红虫、蚯蚓',
                secondary: '浓腥商品饵、虾粉',
                ratio: '腥70% + 香30%',
                tips: '春季水温低，鱼类需要高蛋白补充，腥味穿透力强'
            },
            carp: {
                primary: '螺肉、藻类',
                secondary: '腥香型商品饵、红薯味',
                ratio: '腥香60% + 谷物香40%',
                tips: '鲤鱼类在春季开始活跃，需要补充能量'
            },
            grass: {
                primary: '嫩玉米、芦苇芯',
                secondary: '草籽味商品饵',
                ratio: '草香为主，适当添加腥',
                tips: '草鱼春季喜食嫩草，可配合虫饵使用'
            }
        },
        summer: {
            crucian: {
                primary: '奶香、果酸、谷物香',
                secondary: '清淡本味饵',
                ratio: '淡味60% + 果酸30% + 奶香10%',
                tips: '夏季水温高，鱼类食欲下降，清淡适口为佳'
            },
            carp: {
                primary: '发酵玉米、酵香、酒香',
                secondary: '红薯味、谷物香',
                ratio: '酵香50% + 酒香30% + 谷物20%',
                tips: '夏季鲤鱼喜食发酵类饵料，酒香穿透力强'
            },
            grass: {
                primary: '嫩玉米、芦苇芯、浮萍',
                secondary: '草香型商品饵',
                ratio: '纯天然植物饵为主',
                tips: '草鱼夏季以水草为主食，适当添加瓜果类'
            }
        },
        autumn: {
            crucial: {
                primary: '香腥型饵料',
                secondary: '谷物香、甜香',
                ratio: '香70% + 腥30%',
                tips: '秋季鱼类为过冬储备能量，香腥结合效果最佳'
            },
            carp: {
                primary: '甜香、薯味、枣味',
                secondary: '发酵玉米、蚂蚱',
                ratio: '甜香50% + 发酵30% + 虫饵20%',
                tips: '秋季鲤鱼大口摄食，甜味诱食性强'
            },
            grass: {
                primary: '发酵玉米、蚂蚱、草籽',
                secondary: '香腥型商品饵',
                ratio: '草香为主，适当添加腥',
                tips: '草鱼秋季食量大，多种饵料混合效果佳'
            }
        },
        winter: {
            crucian: {
                primary: '红虫、浓腥商品饵、虾粉',
                secondary: '蚕蛹粉、高蛋白',
                ratio: '腥80% + 香20%',
                tips: '冬季鱼类活动量小，高蛋白腥味刺激食欲'
            },
            carp: {
                primary: '红虫、浓腥商品饵',
                secondary: '极少情况开口',
                ratio: '大腥大香为主',
                tips: '鲤鱼冬季基本停口，需要极浓腥味刺激'
            },
            grass: {
                primary: '基本停口',
                secondary: '可尝试虫饵',
                ratio: '不建议',
                tips: '草鱼冬季极少进食，建议改钓鲫鱼'
            }
        }
    },

    // 天气影响数据库
    weatherImpact: {
        sunny: {
            description: '晴天光线强，鱼多藏深水或遮阴处',
            recommendation: '建议钓深、钓阴、钓水草边',
            fishActivity: 3,
            bestTime: '清晨、傍晚'
        },
        cloudy: {
            description: '阴天光线弱，鱼全天活跃',
            recommendation: '全天可钓，鱼口活跃',
            fishActivity: 5,
            bestTime: '全天'
        },
        rain_light: {
            description: '小雨天气，溶氧充足，鱼口活跃',
            recommendation: '钓浅、钓边、全天可钓',
            fishActivity: 5,
            bestTime: '全天'
        },
        rain_after: {
            description: '阵雨后溶氧增加，鱼类狂口期',
            recommendation: '黄金出钓时机，钓边、钓浅',
            fishActivity: 5,
            bestTime: '雨停后立即出钓'
        },
        thunder_after: {
            description: '雷雨后溶氧剧增，鱼口活跃',
            recommendation: '中上层溶氧高，可适当钓浮',
            fishActivity: 4,
            bestTime: '雨停1-2小时后'
        },
        windy: {
            description: '大风天波浪大，鱼多藏深水',
            recommendation: '找背风处，钓深水',
            fishActivity: 2,
            bestTime: '风力减弱时'
        },
        muggy: {
            description: '闷热低压天，水中缺氧',
            recommendation: '不建议出钓，鱼浮头不开口',
            fishActivity: 1,
            bestTime: '雷雨后'
        },
        cold_front: {
            description: '冷空气降温，鱼口变轻',
            recommendation: '钓深水、钓钝口、用细线',
            fishActivity: 2,
            bestTime: '降温稳定后'
        }
    },

    // 钓场特点数据库
    waterTypeFeatures: {
        wild_pond: {
            name: '野塘',
            characteristics: '鱼类警惕性高，食物来源丰富',
            strategy: '用细线小钩，饵料天然化，多打窝少换位',
            depthRange: '1.5-3米',
            bestPositions: '水草边、深浅交界、入水口'
        },
        wild_reservoir: {
            name: '水库',
            characteristics: '水域大、鱼密度低、鱼体大',
            strategy: '用粗线大钩，打重窝守钓，选位最重要',
            depthRange: '3-8米',
            bestPositions: '大坝、铧尖、库湾、深浅交界'
        },
        wild_river: {
            name: '河流',
            characteristics: '有流水、溶氧高、鱼活跃',
            strategy: '钓回流湾、急流缓流交界、找稳水区',
            depthRange: '2-5米',
            bestPositions: '回水湾、湾口、桥墩下'
        },
        black_pond: {
            name: '黑坑',
            characteristics: '鱼密度高、滑口鱼、警惕性极高',
            strategy: '用精细线组，小钩细线，饵料清淡，钓钝守钓',
            depthRange: '1.5-2.5米',
            bestPositions: '投料机前、增氧机旁、边角'
        },
        commercial_pond: {
            name: '商品塘',
            characteristics: '鱼密度适中、定期放鱼',
            strategy: '根据放鱼时间调整，新鱼重窝快钓',
            depthRange: '2-4米',
            bestPositions: '投料点、中间深水区'
        },
        night_pond: {
            name: '夜钓塘',
            characteristics: '夜间专门钓场、灯光钓',
            strategy: '鱼靠边觅食，钓近钓浅，味型要浓',
            depthRange: '1-2米',
            bestPositions: '灯光区、岸边、浅滩'
        }
    },

    // 时间段数据库
    timeSlotData: {
        morning: {
            time: '04:00-08:00',
            description: '清晨溶氧低但有晨雾，鱼靠岸觅食',
            fishActivity: 5,
            bestDepth: '浅滩 1-1.5米',
            bestPositions: '水草边、浅滩、岸边'
        },
        daytime: {
            time: '08:00-16:00',
            description: '白天光线强，鱼多藏深水',
            fishActivity: 3,
            bestDepth: '深水 2-4米',
            bestPositions: '深浅交界、遮阴处、深水区'
        },
        evening: {
            time: '16:00-20:00',
            description: '傍晚溶氧增加，鱼活跃',
            fishActivity: 4,
            bestDepth: '中深水 1.5-3米',
            bestPositions: '回水湾、下风口、浅滩'
        },
        night: {
            time: '20:00-04:00',
            description: '夜间安静，大鱼靠岸觅食',
            fishActivity: 4,
            bestDepth: '浅中水 1-2.5米',
            bestPositions: '岸边、浅滩、铧尖'
        }
    }
};

// 生成作钓方案
function generateRecommendation() {
    const targetFish = document.getElementById('targetFish').value;
    const fishSize = document.getElementById('fishSize').value;
    const season = document.getElementById('season').value;
    const weather = document.getElementById('weather').value;
    const waterType = document.getElementById('waterType').value;
    const timeSlot = document.getElementById('timeSlot').value;

    if (!targetFish || !fishSize || !season || !weather || !waterType || !timeSlot) {
        alert('请填写所有钓况条件！');
        return;
    }

    // 获取各部分数据
    const fishInfo = fishingDatabase.fishTypes[targetFish];
    const lineConfig = fishingDatabase.lineConfigs[fishSize];
    const weatherInfo = fishingDatabase.weatherImpact[weather];
    const waterTypeInfo = fishingDatabase.waterTypeFeatures[waterType];
    const timeSlotInfo = fishingDatabase.timeSlotData[timeSlot];

    // 获取饵料配方
    let baitInfo = null;
    if (fishingDatabase.baitFormulas[season] && fishingDatabase.baitFormulas[season][targetFish]) {
        baitInfo = fishingDatabase.baitFormulas[season][targetFish];
    } else {
        baitInfo = {
            primary: '请根据季节选择合适的饵料',
            secondary: '参考春季配方',
            ratio: '根据实际情况调整',
            tips: '建议咨询有经验的钓友'
        };
    }

    // 生成HTML
    let html = `
        <div class="result-section">
            <h3><i class="fas fa-check-circle me-2"></i>个性化作钓方案</h3>
            
            <div class="recommendation-box success">
                <h6><i class="fas fa-info-circle"></i>钓况分析</h6>
                <p><strong>目标鱼种：</strong>${fishInfo.name}</p>
                <p><strong>鱼性特点：</strong>${fishInfo.characteristics}</p>
                <p><strong>挣扎强度：</strong>${fishInfo.fighting}</p>
                <p><strong>当前钓场：</strong>${waterTypeInfo.name}</p>
                <p><strong>天气条件：</strong>${weatherInfo.description}</p>
                <p><strong>鱼口活跃度：</strong>${'★'.repeat(weatherInfo.fishActivity)}${'☆'.repeat(5-weatherInfo.fishActivity)}</p>
            </div>

            <div class="recommendation-box">
                <h6><i class="fas fa-tools"></i>线组搭配</h6>
                <p><strong>主线号数：</strong>${lineConfig.mainline.join(' / ')}</p>
                <p><strong>子线号数：</strong>${lineConfig.subline.join(' / ')}</p>
                <p><strong>钩号选择：</strong>${lineConfig.hookSizes.join(' / ')}</p>
                <p><strong>浮漂吃铅量：</strong>${lineConfig.floatLead.join(' / ')}</p>
                <div class="expert-tip">
                    <h6><i class="fas fa-lightbulb"></i>专业提示</h6>
                    <p>根据实际鱼情调整线组，滑口鱼可用等线组，野生鱼可用主线大0.4-0.8号的搭配</p>
                </div>
            </div>

            <div class="recommendation-box">
                <h6><i class="fas fa-worm"></i>饵料推荐</h6>
                <p><strong>主饵：</strong>${baitInfo.primary}</p>
                <p><strong>副饵：</strong>${baitInfo.secondary}</p>
                <p><strong>配比建议：</strong>${baitInfo.ratio}</p>
                <div class="expert-tip">
                    <h6><i class="fas fa-lightbulb"></i>配方说明</h6>
                    <p>${baitInfo.tips}</p>
                </div>
            </div>

            <div class="recommendation-box warning">
                <h6><i class="fas fa-map-marker-alt"></i>钓位选择</h6>
                <p><strong>推荐钓位：</strong>${waterTypeInfo.bestPositions}</p>
                <p><strong>水深范围：</strong>${waterTypeInfo.depthRange}</p>
                <p><strong>最佳时段：</strong>${weatherInfo.bestTime}</p>
                <p><strong>当前时段：</strong>${timeSlotInfo.description}</p>
            </div>

            <div class="recommendation-box">
                <h6><i class="fas fa-crosshairs"></i>钓法策略</h6>
                <p><strong>核心策略：</strong>${waterTypeInfo.strategy}</p>
                <p><strong>钓层选择：</strong>${timeSlotInfo.bestDepth}</p>
                <p><strong>天气应对：</strong>${weatherInfo.recommendation}</p>
            </div>

            <div class="expert-tip">
                <h6><i class="fas fa-star"></i>老钓友经验之谈</h6>
                <ul>
                    <li>到达钓场先观察水情、鱼情，不要急于下竿</li>
                    <li>打窝要适量，宁少勿多，避免鱼吃窝料不吃饵</li>
                    <li>观察浮漂动作，抓住有效口，减少空竿</li>
                    <li>根据鱼情变化及时调整线组和饵料</li>
                    <li>保持耐心，好钓友都知道：守钓要有耐心</li>
                </ul>
            </div>
        </div>
    `;

    document.getElementById('resultPlaceholder').style.display = 'none';
    document.getElementById('resultContent').style.display = 'block';
    document.getElementById('resultContent').innerHTML = html;
}
