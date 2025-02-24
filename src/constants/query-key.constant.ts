export const QueryKeys = {
  MEMBER_ME: ["member-me"],
  DEVELOPER_INFINITE_RESULTS: ["developer-results", "infinite"],
  DEVELOPER_RESULTS: (page: number, limit: number) => ["developer-results", page, limit],
  DEVELOPER_DETAIL_RESULT: (resultId: number) => ["developer-detail-result", resultId],
};
