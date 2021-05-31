/*
 *
 * Tencent is pleased to support the open source community by making
 * Hippy available.
 *
 * Copyright (C) 2019 THL A29 Limited, a Tencent company.
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

#pragma once

#include <sys/types.h>
#include <unistd.h>

#include <fstream>
#include <memory>
#include <string>
#include <vector>

#include "base/logging.h"

namespace hippy {
namespace base {

class HippyFile {
 public:
  static bool SaveFile(const char* file_name,
                       const std::string& content,
                       std::ios::openmode mode = std::ios::out |
                                                 std::ios::binary |
                                                 std::ios::trunc);
  static int RmFullPath(std::string dir_full_path);
  static int CreateDir(const char* path, mode_t mode);
  static int CheckDir(const char* path, int mode);
  static uint64_t GetFileModifytime(const char* file_path);

  template <typename CharType>
  static bool ReadFile(const char* file_path,
                       std::basic_string<CharType>& bytes,
                       bool is_auto_fill) {
    std::ifstream file(file_path);
    if (!file.fail()) {
      file.ignore(std::numeric_limits<std::streamsize>::max());
      std::streamsize size = file.gcount();
      file.clear();
      file.seekg(0, std::ios_base::beg);
      long data_size = size;
      if (is_auto_fill) {
        data_size += 1;
      }
      bytes.resize(data_size);
      long read_size =
          file.read(reinterpret_cast<char*>(&bytes[0]), size).gcount();
      if (size != read_size) {
        TDF_BASE_DLOG(WARNING)
            << "ReadFile file_path = " << file_path << ", size = " << size
            << ", read_size = " << read_size;
      }
      if (is_auto_fill) {
        bytes.back() = '\0';
      }
      file.close();
      TDF_BASE_DLOG(INFO) << "ReadFile succ, file_path = " << file_path
                          << ", size = " << size
                          << ", read_size = " << read_size;
      return true;
    }
    TDF_BASE_DLOG(INFO) << "ReadFile fail, file_path = " << file_path;
    return false;
  }
};
}  // namespace base
}  // namespace hippy
