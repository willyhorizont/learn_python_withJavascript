from functools import reduce

product_list_dict = [
    {'product_id': 'id1', 'price': 30_000},
    {'product_id': 'id2', 'price': 233_000},
    {'product_id': 'id3', 'price': 5_000},
    {'product_id': 'id4', 'price': 499_000}
]


def add_list_dict(total, current):
    # print(f'total: {total}, current: {current}')
    # result = total + current['price']
    # return result
    return total + current['price']


def add_list_dict_one_line(total, current): return total + current['price']


number_list = [0, 1, 2, 3, 4]


def add_list(total, current):
    # print(f'total: {total}, current: {current}')
    # result = total + current
    # return result
    return total + current


def add_list_one_line(total, current): return total + current

# my_add(5, 5)
# total_number_list = reduce(add_list_one_line, number_list, 0)
# print('total_number_list', total_number_list)


# total_product_list_dict = reduce(lambda total, current: total + current['price'], product_list_dict, 0)
# total_product_list_dict = reduce(add_list_dict_one_line, product_list_dict)
# total_product_list_dict = reduce(add_list_dict, product_list_dict, 0)
# print('total_product_list_dict', total_product_list_dict)


def group_list_dict(res_dict, cur_dic):
    # print(f'res_dict: {res_dict}, cur_dic: {cur_dic}')
    # result = res_dict + cur_dic['price']

    if cur_dic['price'] > 100_000:
        return {
            'cheap': [*res_dict['cheap']],
            'expensive': [*res_dict['expensive'], cur_dic] if len([*res_dict['expensive']]) > 0 else [cur_dic]
        }
    # if cur_dic['price'] < 100_000:
    # else:
    return {
        'expensive': [*res_dict['expensive']],
        'cheap': [*res_dict['cheap'], cur_dic] if len([*res_dict['cheap']]) > 0 else [cur_dic]
    }


product_list_dict_grouped = reduce(group_list_dict, product_list_dict, {"expensive": [], "cheap": []})
print('product_list_dict_grouped', product_list_dict_grouped)

# messages = [
#     { 'likes': 3000 },
#     { 'likes': 4000 },
#     { 'likes': 5000 },
#     { 'likes': 6000 }
# ]

# num_favorites = reduce(lambda x, y: x + y['likes'], messages, 0)
# print(num_favorites)
