from functools import reduce

product_list_dict = [
    {'product_id': 'product_id_1', 'price': 30},
    {'product_id': 'product_id_2', 'price': 233},
    {'product_id': 'product_id_3', 'price': 5},
    {'product_id': 'product_id_4', 'price': 499}
]


def group_list_dict(res_dict, cur_dic):
    if cur_dic['price'] > 100:
        return {
            'cheap': [*res_dict['cheap']],
            'expensive': [*res_dict['expensive'], cur_dic] if len([*res_dict['expensive']]) > 0 else [cur_dic]
        }
    return {
        'expensive': [*res_dict['expensive']],
        'cheap': [*res_dict['cheap'], cur_dic] if len([*res_dict['cheap']]) > 0 else [cur_dic]
    }


product_list_dict_grouped = reduce(group_list_dict, product_list_dict, {"expensive": [], "cheap": []})
print('product_list_dict_grouped', product_list_dict_grouped)

product_list_dict_grouped_one_liner = reduce(lambda res_dict, cur_dic: {'cheap': [*res_dict['cheap']], 'expensive': [*res_dict['expensive'], cur_dic] if len([*res_dict['expensive']]) > 0 else [cur_dic]} if cur_dic['price'] > 100 else {'expensive': [*res_dict['expensive']], 'cheap': [*res_dict['cheap'], cur_dic] if len([*res_dict['cheap']]) > 0 else [cur_dic]}, product_list_dict, {"expensive": [], "cheap": []})
print('product_list_dict_grouped_one_liner', product_list_dict_grouped_one_liner)

product_list_dict_grouped_one_liner_breakdown = reduce(lambda res_dict, cur_dic:
                                                          {
                                                              'cheap': [*res_dict['cheap']],
                                                              'expensive':
                                                              [*res_dict['expensive'], cur_dic]
                                                              if len([*res_dict['expensive']]) > 0
                                                              else [cur_dic]
                                                          }
                                                          if cur_dic['price'] > 100
                                                          else
                                                          {
                                                              'expensive': [*res_dict['expensive']],
                                                              'cheap':
                                                              [*res_dict['cheap'], cur_dic]
                                                              if len([*res_dict['cheap']]) > 0
                                                              else [cur_dic]
                                                          },
                                                          product_list_dict,
                                                          {"expensive": [], "cheap": []})
print('product_list_dict_grouped_one_liner_breakdown', product_list_dict_grouped_one_liner_breakdown)

# output =
# {
#     'cheap': [
#         {'product_id': 'product_id_1', 'price': 30},
#         {'product_id': 'product_id_3', 'price': 5}
#     ],
#     'expensive': [
#         {'product_id': 'product_id_2', 'price': 233},
#         {'product_id': 'product_id_4', 'price': 499}
#     ]
# }
