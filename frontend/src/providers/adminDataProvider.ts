import { BASE_API_URL } from "@/constants/api";
import axios from "axios";
import {
    CreateParams,
    DataProvider,
    DeleteParams,
    UpdateParams,
} from "react-admin";

class AdminDataProvider implements DataProvider {
    getList(resource: string): Promise<any> {
        return axios
            .get(`${BASE_API_URL}/admin/${resource}`)
            .then((response) => {
                console.log(response);
                return {
                    data: response.data,
                    total: parseInt(response.headers["x-total-count"], 10),
                };
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getOne(resource: string, params: any): Promise<any> {
        const { id } = params;
        return axios
            .get(`${BASE_API_URL}/admin/${resource}/${id}`)
            .then((response) => {
                console.log(response);
                return {
                    data: {
                        id: response.data.titleId,
                        name: response.data.titleName,
                        titleImageUrl: response.data.titleImage,
                        description: response.data.titleDescription,
                    },
                };
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getMany(): Promise<any> {}

    getManyReference(): Promise<any> {}

    async create(resource: string, params: CreateParams): Promise<any> {
        console.log(params);
        try {
            const response = await axios.post(
                `${BASE_API_URL}/admin/${resource}`,
                params.data
            );
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
            throw new Error("Failed to create resource");
        }
    }

    async update(resource: string, params: UpdateParams): Promise<any> {
        console.log(params);
        try {
            const response = await axios.put(
                `${BASE_API_URL}/admin/${resource}/${params.id}`,
                params.data
            );
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
            throw new Error("Failed to create resource");
        }
    }

    updateMany(): Promise<any> {}

    async delete(resource: string, params: DeleteParams): Promise<any> {
        try {
            const response = await axios.delete(
                `${BASE_API_URL}/admin/${resource}/${params.id}`
            );
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
            throw new Error("Failed to delete resource");
        }
    }

    deleteMany(): Promise<any> {}
}

const dataProvider = new AdminDataProvider();
export default dataProvider;
