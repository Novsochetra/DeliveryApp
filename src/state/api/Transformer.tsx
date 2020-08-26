import { ISlider } from '../../types/sliders'
import { IGame } from '../../types/games'
import { ILatestNews } from '../../types/latestNews'

export const transformSlider = (json: any): ISlider => {
  return {
    id: json.id,
    name: json.name,
    title: json.title,
    description: json.description,
    url: json.url,
    tag: json.tag,
    image: json.image,
    status: json.status,
    adminId: json.adminId,
    createdAt: json.createdAt,
    updatedAt: json.updatedAt,
    target: json.target,
  }
}

export const transformLatestNews = (json: any): ILatestNews => {
  return {
    id: json.id,
    title: json.title,
    body: json.body,
    adminId: json.adminId,
    seoTitle: json.seoTitle,
    seoDescription: json.seoDescription,
    seoKeyword: json.seoKeyword,
    createdAt: json.createdAt,
    updatedAt: json.updatedAt,
    summary: json.summary,
    featuredImage: json.featuredImage,
    slug: json.slug,
    gameId: json.gameId,
    status: json.status,
    default: json.default,
    postType: json.postType,
    parentId: json.parentId,
    viewCounter: json.viewCounter,
    topNews: json.topNews,
    share: json.share,
    pvLastMonth: json.pvLastMonth,
    pvLastWeek: json.pvLastWeek,
    pvLast7Days: json.pvLast7Days,
    pvLast30Days: json.pvLast30Days,
  }
}

export const transformGame = (json: any): IGame => {
  return {
    id: json.id,
    createdAt: json.createdAt,
    updatedAt: json.updatedAt,
    title: json.title,
    slug: json.slug,
    status: json.status,
    adminId: json.adminId,
    logo: json.logo,
    featuredImage: json.featuredImage,
    description: json.description,
    seoTitle: json.seoTitle,
    seoDescription: json.seoDescription,
    seoKeyword: json.seoKeyword,
    viewCounter: json.viewCounter,
    topGame: json.topGame,
    pFbid: json.pFbid,
    twConfig: json.twConfig,
    orderSidebarPost: json.orderSidebarPost,
    banner: json.banner,
    fbUrl: json.fbUrl,
    twUrl: json.twUrl,
    pvLastMonth: json.pvLastMonth,
    pvLastWeek: json.pvLastWeek,
    pvLast7Days: json.pvLast7Days,
    pvLast30Days: json.pvLast30Days,
  }
}
